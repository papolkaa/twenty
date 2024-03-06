import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { FetchCalendarsByBatchesService } from 'src/workspace/messaging/services/fetch-calendars-by-batches.service';
import { GmailClientProvider } from 'src/workspace/messaging/services/providers/gmail/gmail-client.provider';
import { CalendarQueue } from 'src/integrations/calendar-queue/calendar-queue.constants';
import { CalendarQueueService } from 'src/integrations/calendar-queue/services/calendar-queue.service';
import {
  GmailFullSyncJobData,
  GmailFullSyncJob,
} from 'src/workspace/messaging/jobs/gmail-full-sync.job';
import { ConnectedAccountService } from 'src/workspace/messaging/repositories/connected-account/connected-account.service';
import { CalendarChannelService } from 'src/workspace/messaging/repositories/calendar-channel/calendar-channel.service';
import { CalendarChannelCalendarAssociationService } from 'src/workspace/messaging/repositories/calendar-channel-calendar-association/calendar-channel-calendar-association.service';
import { createQueriesFromCalendarIds } from 'src/workspace/messaging/utils/create-queries-from-calendar-ids.util';
import { gmailSearchFilterExcludeEmails } from 'src/workspace/messaging/utils/gmail-search-filter';
import { BlocklistService } from 'src/workspace/messaging/repositories/blocklist/blocklist.service';
import { SaveCalendarsAndCreateContactsService } from 'src/workspace/messaging/services/save-calendars-and-create-contacts.service';
import {
  FeatureFlagEntity,
  FeatureFlagKeys,
} from 'src/core/feature-flag/feature-flag.entity';

@Injectable()
export class GmailFullSyncService {
  private readonly logger = new Logger(GmailFullSyncService.name);

  constructor(
    private readonly gmailClientProvider: GmailClientProvider,
    private readonly fetchCalendarsByBatchesService: FetchCalendarsByBatchesService,
    @Inject(CalendarQueue.messagingQueue)
    private readonly calendarQueueService: CalendarQueueService,
    private readonly connectedAccountService: ConnectedAccountService,
    private readonly calendarChannelService: CalendarChannelService,
    private readonly calendarChannelCalendarAssociationService: CalendarChannelCalendarAssociationService,
    private readonly blocklistService: BlocklistService,
    private readonly saveCalendarsAndCreateContactsService: SaveCalendarsAndCreateContactsService,
    @InjectRepository(FeatureFlagEntity, 'core')
    private readonly featureFlagRepository: Repository<FeatureFlagEntity>,
  ) {}

  public async startGoogleCalendarFullSync(
    workspaceId: string,
    connectedAccountId: string,
    nextPageToken?: string,
  ): Promise<void> {
    const connectedAccount = await this.connectedAccountService.getByIdOrFail(
      connectedAccountId,
      workspaceId,
    );

    const accessToken = connectedAccount.accessToken;
    const refreshToken = connectedAccount.refreshToken;
    const workspaceMemberId = connectedAccount.accountOwnerId;

    if (!refreshToken) {
      throw new Error(
        `No refresh token found for connected account ${connectedAccountId} in workspace ${workspaceId} during full-sync`,
      );
    }

    const gmailCalendarChannel =
      await this.calendarChannelService.getFirstByConnectedAccountIdOrFail(
        connectedAccountId,
        workspaceId,
      );

    const gmailCalendarChannelId = gmailCalendarChannel.id;

    const gmailClient =
      await this.gmailClientProvider.getGmailClient(refreshToken);

    const isBlocklistEnabledFeatureFlag =
      await this.featureFlagRepository.findOneBy({
        workspaceId,
        key: FeatureFlagKeys.IsBlocklistEnabled,
        value: true,
      });

    const isBlocklistEnabled =
      isBlocklistEnabledFeatureFlag && isBlocklistEnabledFeatureFlag.value;

    const blocklist = isBlocklistEnabled
      ? await this.blocklistService.getByWorkspaceMemberId(
          workspaceMemberId,
          workspaceId,
        )
      : [];

    const blocklistedEmails = blocklist.map((blocklist) => blocklist.handle);
    let startTime = Date.now();

    const calendars = await gmailClient.users.calendars.list({
      userId: 'me',
      maxResults: 500,
      pageToken: nextPageToken,
      q: gmailSearchFilterExcludeEmails(blocklistedEmails),
    });

    let endTime = Date.now();

    this.logger.log(
      `gmail full-sync for workspace ${workspaceId} and account ${connectedAccountId} getting calendars list in ${
        endTime - startTime
      }ms.`,
    );

    const calendarsData = calendars.data.calendars;

    const calendarExternalIds = calendarsData
      ? calendarsData.map((calendar) => calendar.id || '')
      : [];

    if (!calendarExternalIds || calendarExternalIds?.length === 0) {
      this.logger.log(
        `gmail full-sync for workspace ${workspaceId} and account ${connectedAccountId} done with nothing to import.`,
      );

      return;
    }

    startTime = Date.now();

    const existingCalendarChannelCalendarAssociations =
      await this.calendarChannelCalendarAssociationService.getByCalendarExternalIdsAndCalendarChannelId(
        calendarExternalIds,
        gmailCalendarChannelId,
        workspaceId,
      );

    endTime = Date.now();

    this.logger.log(
      `gmail full-sync for workspace ${workspaceId} and account ${connectedAccountId}: getting existing calendar channel calendar associations in ${
        endTime - startTime
      }ms.`,
    );

    const existingCalendarChannelCalendarAssociationsExternalIds =
      existingCalendarChannelCalendarAssociations.map(
        (calendarChannelCalendarAssociation) =>
          calendarChannelCalendarAssociation.calendarExternalId,
      );

    const calendarsToFetch = calendarExternalIds.filter(
      (calendarExternalId) =>
        !existingCalendarChannelCalendarAssociationsExternalIds.includes(
          calendarExternalId,
        ),
    );

    const calendarQueries = createQueriesFromCalendarIds(calendarsToFetch);

    startTime = Date.now();

    const { calendars: calendarsToSave, errors } =
      await this.fetchCalendarsByBatchesService.fetchAllCalendars(
        calendarQueries,
        accessToken,
        'gmail full-sync',
        workspaceId,
        connectedAccountId,
      );

    endTime = Date.now();

    this.logger.log(
      `gmail full-sync for workspace ${workspaceId} and account ${connectedAccountId}: fetching all calendars in ${
        endTime - startTime
      }ms.`,
    );

    if (calendarsToSave.length > 0) {
      this.saveCalendarsAndCreateContactsService.saveCalendarsAndCreateContacts(
        calendarsToSave,
        connectedAccount,
        workspaceId,
        gmailCalendarChannelId,
        'gmail full-sync',
      );
    } else {
      this.logger.log(
        `gmail full-sync for workspace ${workspaceId} and account ${connectedAccountId} done with nothing to import.`,
      );
    }

    if (errors.length) {
      throw new Error(
        `Error fetching calendars for ${connectedAccountId} in workspace ${workspaceId} during full-sync`,
      );
    }
    const lastModifiedCalendarId = calendarsToFetch[0];

    const historyId = calendarsToSave.find(
      (calendar) => calendar.externalId === lastModifiedCalendarId,
    )?.historyId;

    if (!historyId) {
      throw new Error(
        `No historyId found for ${connectedAccountId} in workspace ${workspaceId} during full-sync`,
      );
    }

    startTime = Date.now();

    await this.connectedAccountService.updateLastSyncHistoryIdIfHigher(
      historyId,
      connectedAccount.id,
      workspaceId,
    );

    endTime = Date.now();

    this.logger.log(
      `gmail full-sync for workspace ${workspaceId} and account ${connectedAccountId}: updating last sync history id in ${
        endTime - startTime
      }ms.`,
    );

    this.logger.log(
      `gmail full-sync for workspace ${workspaceId} and account ${connectedAccountId} ${
        nextPageToken ? `and ${nextPageToken} pageToken` : ''
      }done.`,
    );

    if (calendars.data.nextPageToken) {
      await this.calendarQueueService.add<GmailFullSyncJobData>(
        GmailFullSyncJob.name,
        {
          workspaceId,
          connectedAccountId,
          nextPageToken: calendars.data.nextPageToken,
        },
        {
          retryLimit: 2,
        },
      );
    }
  }
}
