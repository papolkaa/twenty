import { Scope } from '@nestjs/common';

import { Not } from 'typeorm';

import { ObjectRecordDeleteEvent } from 'src/engine/integrations/event-emitter/types/object-record-delete.event';
import { Process } from 'src/engine/integrations/message-queue/decorators/process.decorator';
import { Processor } from 'src/engine/integrations/message-queue/decorators/processor.decorator';
import { MessageQueue } from 'src/engine/integrations/message-queue/message-queue.constants';
import { TwentyORMManager } from 'src/engine/twenty-orm/twenty-orm.manager';
import { WorkspaceEventBatch } from 'src/engine/workspace-event-emitter/workspace-event.type';
import { BlocklistWorkspaceEntity } from 'src/modules/blocklist/standard-objects/blocklist.workspace-entity';
import { MessageChannelSyncStatusService } from 'src/modules/messaging/common/services/message-channel-sync-status.service';
import {
  MessageChannelSyncStage,
  MessageChannelWorkspaceEntity,
} from 'src/modules/messaging/common/standard-objects/message-channel.workspace-entity';

export type BlocklistReimportMessagesJobData = WorkspaceEventBatch<
  ObjectRecordDeleteEvent<BlocklistWorkspaceEntity>
>;

@Processor({
  queueName: MessageQueue.messagingQueue,
  scope: Scope.REQUEST,
})
export class BlocklistReimportMessagesJob {
  constructor(
    private readonly twentyORMManager: TwentyORMManager,
    private readonly messagingChannelSyncStatusService: MessageChannelSyncStatusService,
  ) {}

  @Process(BlocklistReimportMessagesJob.name)
  async handle(data: BlocklistReimportMessagesJobData): Promise<void> {
    const workspaceId = data.workspaceId;

    const messageChannelRepository =
      await this.twentyORMManager.getRepository<MessageChannelWorkspaceEntity>(
        'messageChannel',
      );

    for (const eventPayload of data.events) {
      const workspaceMemberId =
        eventPayload.properties.before.workspaceMemberId;

      const messageChannels = await messageChannelRepository.find({
        where: {
          connectedAccount: {
            accountOwnerId: workspaceMemberId,
          },
          syncStage: Not(
            MessageChannelSyncStage.FULL_MESSAGE_LIST_FETCH_PENDING,
          ),
        },
      });

      await this.messagingChannelSyncStatusService.resetAndScheduleFullMessageListFetch(
        messageChannels.map((messageChannel) => messageChannel.id),
        workspaceId,
      );
    }
  }
}
