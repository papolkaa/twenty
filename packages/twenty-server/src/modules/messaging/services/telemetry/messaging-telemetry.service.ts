import { Injectable } from '@nestjs/common';

import { AnalyticsService } from 'src/engine/core-modules/analytics/analytics.service';

type MessagingTelemetryTrackInput = {
  eventName: string;
  workspaceId: string;
  userId?: string;
  connectedAccountId?: string;
  messageChannelId?: string;
};

@Injectable()
export class MessagingTelemetryService {
  constructor(private readonly analyticsService: AnalyticsService) {}

  public async track({
    eventName,
    workspaceId,
    userId,
    connectedAccountId,
    messageChannelId,
  }: MessagingTelemetryTrackInput): Promise<void> {
    await this.analyticsService.create(
      {
        type: 'track',
        data: {
          eventName: `messaging.${eventName}`,
          workspaceId,
          userId,
          connectedAccountId,
          messageChannelId,
        },
      },
      userId,
      workspaceId,
      '', // voluntarely not retrieving this
      '', // to avoid slowing down
      '',
    );
  }
}
