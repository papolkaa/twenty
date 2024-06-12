import { Injectable } from '@nestjs/common';

import { google } from 'googleapis';

import { InjectWorkspaceRepository } from 'src/engine/twenty-orm/decorators/inject-workspace-repository.decorator';
import { ObjectRecord } from 'src/engine/workspace-manager/workspace-sync-metadata/types/object-record';
import { OAuth2ClientManagerService } from 'src/modules/connected-account/oauth2-client-manager/services/oauth2-client-manager.service';
import { ConnectedAccountRepository } from 'src/modules/connected-account/repositories/connected-account.repository';
import { ConnectedAccountWorkspaceEntity } from 'src/modules/connected-account/standard-objects/connected-account.workspace-entity';

@Injectable()
export class GoogleEmailAliasManagerService {
  constructor(
    @InjectWorkspaceRepository(ConnectedAccountWorkspaceEntity)
    private readonly connectedAccountRepository: ConnectedAccountRepository,
    private readonly oAuth2ClientManagerService: OAuth2ClientManagerService,
  ) {}

  public async refreshAliases(
    connectedAccount: ObjectRecord<ConnectedAccountWorkspaceEntity>,
  ) {
    const oAuth2Client =
      await this.oAuth2ClientManagerService.getOAuth2Client(connectedAccount);

    const people = google.people({
      version: 'v1',
      auth: oAuth2Client,
    });

    const emailsResponse = await people.people.get({
      resourceName: 'people/me',
      personFields: 'emailAddresses',
    });

    const emailAddresses = emailsResponse.data.emailAddresses;

    const emailAliases = emailAddresses?.map((emailAddress) => {
      return emailAddress.value;
    });
  }
}
