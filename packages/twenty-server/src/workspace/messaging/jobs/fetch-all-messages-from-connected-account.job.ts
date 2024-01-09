import { Injectable } from '@nestjs/common';

import { MessageQueueJob } from 'src/integrations/message-queue/interfaces/message-queue-job.interface';

import { EnvironmentService } from 'src/integrations/environment/environment.service';
import { RefreshAccessTokenService } from 'src/workspace/messaging/services/refresh-access-token.service';
import { GmailFullSyncService } from 'src/workspace/messaging/services/gmail-full-sync.service';

export type FetchAllMessagesFromConnectedAccountJobData = {
  workspaceId: string;
  connectedAccountId: string;
};

@Injectable()
export class FetchAllMessagesFromConnectedAccountJob
  implements MessageQueueJob<FetchAllMessagesFromConnectedAccountJobData>
{
  constructor(
    private readonly environmentService: EnvironmentService,
    private readonly refreshAccessTokenService: RefreshAccessTokenService,
    private readonly fetchWorkspaceMessagesService: GmailFullSyncService,
  ) {}

  async handle(
    data: FetchAllMessagesFromConnectedAccountJobData,
  ): Promise<void> {
    console.log(
      `fetching messages for workspace ${data.workspaceId} and account ${
        data.connectedAccountId
      } with ${this.environmentService.getMessageQueueDriverType()}`,
    );
    await this.refreshAccessTokenService.refreshAndSaveAccessToken(
      data.workspaceId,
      data.connectedAccountId,
    );

    await this.fetchWorkspaceMessagesService.fetchConnectedAccountThreads(
      data.workspaceId,
      data.connectedAccountId,
    );
  }
}
