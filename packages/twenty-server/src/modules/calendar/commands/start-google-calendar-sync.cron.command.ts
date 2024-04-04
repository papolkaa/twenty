import { Inject } from '@nestjs/common';

import { Command, CommandRunner } from 'nest-commander';

import { MessageQueue } from 'src/engine/integrations/message-queue/message-queue.constants';
import { MessageQueueService } from 'src/engine/integrations/message-queue/services/message-queue.service';
import { googleCalendarSyncCronPattern } from 'src/modules/calendar/jobs/crons/google-calendar-sync.cron.pattern';

@Command({
  name: 'google-calendar-sync:cron:start',
  description: 'Starts a cron job to sync google calendar for all workspaces.',
})
export class StartGoogleCalendarSyncCronJobCommand extends CommandRunner {
  constructor(
    @Inject(MessageQueue.cronQueue)
    private readonly messageQueueService: MessageQueueService,
  ) {
    super();
  }

  async run(): Promise<void> {
    await this.messageQueueService.addCron<undefined>(
      StartGoogleCalendarSyncCronJobCommand.name,
      undefined,
      {
        repeat: { pattern: googleCalendarSyncCronPattern },
      },
    );
  }
}
