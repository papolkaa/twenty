import { Injectable } from '@nestjs/common';

import {
  CalendarDriverException,
  CalendarDriverExceptionCode,
} from 'src/modules/calendar/calendar-event-import-manager/drivers/exceptions/calendar-driver.exception';
import { GoogleCalendarGetEventsService as GoogleCalendarGetCalendarEventsService } from 'src/modules/calendar/calendar-event-import-manager/drivers/google-calendar/services/google-calendar-get-events.service';
import { CalendarEventWithParticipants } from 'src/modules/calendar/common/types/calendar-event';
import { ConnectedAccountWorkspaceEntity } from 'src/modules/connected-account/standard-objects/connected-account.workspace-entity';

export type GetCalendarEventsResponse = {
  calendarEvents: CalendarEventWithParticipants[];
  nextSyncCursor: string;
};

@Injectable()
export class CalendarGetCalendarEventsService {
  constructor(
    private readonly googleCalendarGetCalendarEventsService: GoogleCalendarGetCalendarEventsService,
  ) {}

  public async getCalendarEvents(
    connectedAccount: Pick<
      ConnectedAccountWorkspaceEntity,
      'provider' | 'refreshToken' | 'id'
    >,
    syncCursor?: string,
  ): Promise<GetCalendarEventsResponse> {
    switch (connectedAccount.provider) {
      case 'google':
        return this.googleCalendarGetCalendarEventsService.getCalendarEvents(
          connectedAccount,
          syncCursor,
        );
      default:
        throw new CalendarDriverException(
          `Provider ${connectedAccount.provider} is not supported`,
          CalendarDriverExceptionCode.PROVIDER_NOT_SUPPORTED,
        );
    }
  }
}
