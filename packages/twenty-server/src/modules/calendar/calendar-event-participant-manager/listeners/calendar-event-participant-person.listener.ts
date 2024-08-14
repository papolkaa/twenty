import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

import { ObjectRecordCreateEvent } from 'src/engine/integrations/event-emitter/types/object-record-create.event';
import { ObjectRecordUpdateEvent } from 'src/engine/integrations/event-emitter/types/object-record-update.event';
import { objectRecordChangedProperties as objectRecordUpdateEventChangedProperties } from 'src/engine/integrations/event-emitter/utils/object-record-changed-properties.util';
import { InjectMessageQueue } from 'src/engine/integrations/message-queue/decorators/message-queue.decorator';
import { MessageQueue } from 'src/engine/integrations/message-queue/message-queue.constants';
import { MessageQueueService } from 'src/engine/integrations/message-queue/services/message-queue.service';
import {
  CalendarEventParticipantMatchParticipantJob,
  CalendarEventParticipantMatchParticipantJobData,
} from 'src/modules/calendar/calendar-event-participant-manager/jobs/calendar-event-participant-match-participant.job';
import {
  CalendarEventParticipantUnmatchParticipantJob,
  CalendarEventParticipantUnmatchParticipantJobData,
} from 'src/modules/calendar/calendar-event-participant-manager/jobs/calendar-event-participant-unmatch-participant.job';
import { PersonWorkspaceEntity } from 'src/modules/person/standard-objects/person.workspace-entity';

@Injectable()
export class CalendarEventParticipantPersonListener {
  constructor(
    @InjectMessageQueue(MessageQueue.calendarQueue)
    private readonly messageQueueService: MessageQueueService,
  ) {}

  @OnEvent('person.created')
  async handleCreatedEvent(
    payload: ObjectRecordCreateEvent<PersonWorkspaceEntity>[],
  ) {
    for (const eventPayload of payload) {
      if (eventPayload.properties.after.email === null) {
        return;
      }

      // TODO: modify this job to take an array of participants to match
      await this.messageQueueService.add<CalendarEventParticipantMatchParticipantJobData>(
        CalendarEventParticipantMatchParticipantJob.name,
        {
          workspaceId: eventPayload.workspaceId,
          email: eventPayload.properties.after.email,
          personId: eventPayload.recordId,
        },
      );
    }
  }

  @OnEvent('person.updated')
  async handleUpdatedEvent(
    payload: ObjectRecordUpdateEvent<PersonWorkspaceEntity>[],
  ) {
    for (const eventPayload of payload) {
      if (
        objectRecordUpdateEventChangedProperties(
          eventPayload.properties.before,
          eventPayload.properties.after,
        ).includes('email')
      ) {
        // TODO: modify this job to take an array of participants to match
        await this.messageQueueService.add<CalendarEventParticipantUnmatchParticipantJobData>(
          CalendarEventParticipantUnmatchParticipantJob.name,
          {
            workspaceId: eventPayload.workspaceId,
            email: eventPayload.properties.before.email,
            personId: eventPayload.recordId,
          },
        );

        await this.messageQueueService.add<CalendarEventParticipantMatchParticipantJobData>(
          CalendarEventParticipantMatchParticipantJob.name,
          {
            workspaceId: eventPayload.workspaceId,
            email: eventPayload.properties.after.email,
            personId: eventPayload.recordId,
          },
        );
      }
    }
  }
}
