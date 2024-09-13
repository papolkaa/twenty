import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Any, EntityManager, Repository } from 'typeorm';

import { FieldMetadataEntity } from 'src/engine/metadata-modules/field-metadata/field-metadata.entity';
import { ScopedWorkspaceContextFactory } from 'src/engine/twenty-orm/factories/scoped-workspace-context.factory';
import { TwentyORMManager } from 'src/engine/twenty-orm/twenty-orm.manager';
import { WorkspaceEventEmitter } from 'src/engine/workspace-event-emitter/workspace-event-emitter';
import { PERSON_STANDARD_FIELD_IDS } from 'src/engine/workspace-manager/workspace-sync-metadata/constants/standard-field-ids';
import { CalendarEventParticipantWorkspaceEntity } from 'src/modules/calendar/common/standard-objects/calendar-event-participant.workspace-entity';
import { MessageParticipantWorkspaceEntity } from 'src/modules/messaging/common/standard-objects/message-participant.workspace-entity';
import { PersonWorkspaceEntity } from 'src/modules/person/standard-objects/person.workspace-entity';
import { WorkspaceMemberWorkspaceEntity } from 'src/modules/workspace-member/standard-objects/workspace-member.workspace-entity';

@Injectable()
export class MatchParticipantService<
  ParticipantWorkspaceEntity extends
    | CalendarEventParticipantWorkspaceEntity
    | MessageParticipantWorkspaceEntity,
> {
  constructor(
    private readonly workspaceEventEmitter: WorkspaceEventEmitter,
    private readonly twentyORMManager: TwentyORMManager,
    private readonly scopedWorkspaceContextFactory: ScopedWorkspaceContextFactory,
    @InjectRepository(FieldMetadataEntity, 'metadata')
    private readonly fieldMetadataRepository: Repository<FieldMetadataEntity>,
  ) {}

  private async getParticipantRepository(
    objectMetadataName: 'messageParticipant' | 'calendarEventParticipant',
  ) {
    if (objectMetadataName === 'messageParticipant') {
      return await this.twentyORMManager.getRepository<MessageParticipantWorkspaceEntity>(
        objectMetadataName,
      );
    }

    return await this.twentyORMManager.getRepository<CalendarEventParticipantWorkspaceEntity>(
      objectMetadataName,
    );
  }

  public async matchParticipants(
    participants: ParticipantWorkspaceEntity[],
    objectMetadataName: 'messageParticipant' | 'calendarEventParticipant',
    transactionManager?: EntityManager,
  ) {
    const participantRepository =
      await this.getParticipantRepository(objectMetadataName);

    const workspaceId = this.scopedWorkspaceContextFactory.create().workspaceId;

    if (!workspaceId) {
      throw new Error('Workspace ID is required');
    }

    const participantIds = participants.map((participant) => participant.id);
    const uniqueParticipantsHandles = [
      ...new Set(participants.map((participant) => participant.handle)),
    ];

    const emailsFieldMetadata = await this.fieldMetadataRepository.findOne({
      where: {
        workspaceId: workspaceId,
        standardId: PERSON_STANDARD_FIELD_IDS.emails,
      },
    });

    const personRepository =
      await this.twentyORMManager.getRepository<PersonWorkspaceEntity>(
        'person',
      );

    const people = emailsFieldMetadata
      ? await personRepository.find(
          {
            where: {
              emails: Any(uniqueParticipantsHandles),
            },
          },
          transactionManager,
        )
      : await personRepository.find(
          {
            where: {
              email: Any(uniqueParticipantsHandles),
            },
          },
          transactionManager,
        );

    const workspaceMemberRepository =
      await this.twentyORMManager.getRepository<WorkspaceMemberWorkspaceEntity>(
        'workspaceMember',
      );

    const workspaceMembers = await workspaceMemberRepository.find(
      {
        where: {
          userEmail: Any(uniqueParticipantsHandles),
        },
      },
      transactionManager,
    );

    for (const handle of uniqueParticipantsHandles) {
      const person = people.find((person) =>
        emailsFieldMetadata
          ? person.emails?.primaryEmail === handle
          : person.email === handle,
      );

      const workspaceMember = workspaceMembers.find(
        (workspaceMember) => workspaceMember.userEmail === handle,
      );

      await participantRepository.update(
        {
          id: Any(participantIds),
          handle,
        },
        {
          personId: person?.id,
          workspaceMemberId: workspaceMember?.id,
        },
        transactionManager,
      );
    }

    const matchedParticipants = await participantRepository.find(
      {
        where: {
          id: Any(participantIds),
          handle: Any(uniqueParticipantsHandles),
        },
      },
      transactionManager,
    );

    this.workspaceEventEmitter.emit(
      `${objectMetadataName}.matched`,
      [
        {
          workspaceMemberId: null,
          participants: matchedParticipants,
        },
      ],
      workspaceId,
    );
  }

  public async matchParticipantsAfterPersonOrWorkspaceMemberCreation(
    handle: string,
    objectMetadataName: 'messageParticipant' | 'calendarEventParticipant',
    personId?: string,
    workspaceMemberId?: string,
  ) {
    const participantRepository =
      await this.getParticipantRepository(objectMetadataName);

    const workspaceId = this.scopedWorkspaceContextFactory.create().workspaceId;

    if (!workspaceId) {
      throw new Error('Workspace ID is required');
    }

    const participantsToUpdate = await participantRepository.find({
      where: {
        handle,
      },
    });

    const participantIdsToUpdate = participantsToUpdate.map(
      (participant) => participant.id,
    );

    if (personId) {
      await participantRepository.update(
        {
          id: Any(participantIdsToUpdate),
        },
        {
          person: {
            id: personId,
          },
        },
      );

      const updatedParticipants = await participantRepository.find({
        where: {
          id: Any(participantIdsToUpdate),
        },
      });

      this.workspaceEventEmitter.emit(
        `${objectMetadataName}.matched`,
        [
          {
            workspaceId,
            name: `${objectMetadataName}.matched`,
            workspaceMemberId: null,
            participants: updatedParticipants,
          },
        ],
        workspaceId,
      );
    }

    if (workspaceMemberId) {
      await participantRepository.update(
        {
          id: Any(participantIdsToUpdate),
        },
        {
          workspaceMember: {
            id: workspaceMemberId,
          },
        },
      );
    }
  }

  public async unmatchParticipants(
    handle: string,
    objectMetadataName: 'messageParticipant' | 'calendarEventParticipant',
    personId?: string,
    workspaceMemberId?: string,
  ) {
    const participantRepository =
      await this.getParticipantRepository(objectMetadataName);

    if (personId) {
      await participantRepository.update(
        {
          handle,
        },
        {
          person: null,
        },
      );
    }
    if (workspaceMemberId) {
      await participantRepository.update(
        {
          handle,
        },
        {
          workspaceMember: null,
        },
      );
    }
  }
}
