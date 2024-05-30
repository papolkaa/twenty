import { Injectable } from '@nestjs/common';

import axios from 'axios';

import { EnvironmentService } from 'src/engine/integrations/environment/environment.service';
import { InjectObjectMetadataRepository } from 'src/engine/object-metadata-repository/object-metadata-repository.decorator';
import { ConnectedAccountRepository } from 'src/modules/connected-account/repositories/connected-account.repository';
import { ConnectedAccountWorkspaceEntity } from 'src/modules/connected-account/standard-objects/connected-account.workspace-entity';
import { MessageChannelRepository } from 'src/modules/messaging/repositories/message-channel.repository';
import { MessageChannelSyncStatusService } from 'src/modules/messaging/services/message-channel-sync-status/message-channel-sync-status.service';
import { MessageChannelWorkspaceEntity } from 'src/modules/messaging/standard-objects/message-channel.workspace-entity';

@Injectable()
export class GoogleAPIRefreshAccessTokenService {
  constructor(
    private readonly environmentService: EnvironmentService,
    @InjectObjectMetadataRepository(ConnectedAccountWorkspaceEntity)
    private readonly connectedAccountRepository: ConnectedAccountRepository,
    private readonly messageChannelSyncStatusService: MessageChannelSyncStatusService,
    @InjectObjectMetadataRepository(MessageChannelWorkspaceEntity)
    private readonly messageChannelRepository: MessageChannelRepository,
  ) {}

  async refreshAndSaveAccessToken(
    workspaceId: string,
    connectedAccountId: string,
  ): Promise<void> {
    const connectedAccount = await this.connectedAccountRepository.getById(
      connectedAccountId,
      workspaceId,
    );

    if (!connectedAccount) {
      throw new Error(
        `No connected account found for ${connectedAccountId} in workspace ${workspaceId}`,
      );
    }

    if (connectedAccount.authFailedAt) {
      throw new Error(
        `Skipping refresh of access token for connected account ${connectedAccountId} in workspace ${workspaceId} because auth already failed, a new refresh token is needed`,
      );
    }

    const refreshToken = connectedAccount.refreshToken;

    if (!refreshToken) {
      throw new Error(
        `No refresh token found for connected account ${connectedAccountId} in workspace ${workspaceId}`,
      );
    }

    const accessToken = await this.refreshAccessToken(
      refreshToken,
      connectedAccountId,
      workspaceId,
    );

    await this.connectedAccountRepository.updateAccessToken(
      accessToken,
      connectedAccountId,
      workspaceId,
    );
  }

  async refreshAccessToken(
    refreshToken: string,
    connectedAccountId: string,
    workspaceId: string,
  ): Promise<string> {
    try {
      const response = await axios.post(
        'https://oauth2.googleapis.com/token',
        {
          client_id: this.environmentService.get('AUTH_GOOGLE_CLIENT_ID'),
          client_secret: this.environmentService.get(
            'AUTH_GOOGLE_CLIENT_SECRET',
          ),
          refresh_token: refreshToken,
          grant_type: 'refresh_token',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      return response.data.access_token;
    } catch (error) {
      await this.connectedAccountRepository.updateAuthFailedAt(
        connectedAccountId,
        workspaceId,
      );

      const messageChannel =
        await this.messageChannelRepository.getFirstByConnectedAccountId(
          connectedAccountId,
          workspaceId,
        );

      if (!messageChannel) {
        throw new Error(
          `No message channel found for connected account ${connectedAccountId} in workspace ${workspaceId}`,
        );
      }

      await this.messageChannelSyncStatusService.markAsFailedInsufficientPermissionsAndFlushMessagesToImport(
        messageChannel.id,
        workspaceId,
      );

      throw new Error(
        `Error refreshing access token: ${error.code}: ${error.message} for connected account ${connectedAccountId} in workspace ${workspaceId}`,
      );
    }
  }
}
