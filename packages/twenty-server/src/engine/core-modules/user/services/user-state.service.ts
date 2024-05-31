import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { KeyValuePair } from 'src/engine/core-modules/key-value-pair/key-value-pair.entity';
import { SkipSyncEmail } from 'src/engine/core-modules/user/dtos/skip-sync-email.entity';
import { InjectObjectMetadataRepository } from 'src/engine/object-metadata-repository/object-metadata-repository.decorator';
import { ConnectedAccountWorkspaceEntity } from 'src/modules/connected-account/standard-objects/connected-account.workspace-entity';
import { ConnectedAccountRepository } from 'src/modules/connected-account/repositories/connected-account.repository';
import { User } from 'src/engine/core-modules/user/user.entity';
import { Workspace } from 'src/engine/core-modules/workspace/workspace.entity';
import { UserState } from 'src/engine/core-modules/user/dtos/user-state.dto';

export enum EmailSyncStatus {
  SKIPPED = 'SKIPPED',
}

export enum UserStateKeys {
  EMAIL_SYNC_ONBOARDING_STEP = 'EMAIL_SYNC_ONBOARDING_STEP',
}

@Injectable()
export class UserStateService {
  constructor(
    @InjectRepository(KeyValuePair, 'core')
    private readonly keyValuePairRepository: Repository<KeyValuePair>,
    @InjectObjectMetadataRepository(ConnectedAccountWorkspaceEntity)
    private readonly connectedAccountRepository: ConnectedAccountRepository,
  ) {}

  async getUserState(user: User, workspace: Workspace): Promise<UserState> {
    if (!user || !workspace) {
      return {
        skipSyncEmail: true,
      };
    }
    const connectedAccounts =
      await this.connectedAccountRepository.getAllByUserId(
        user.id,
        workspace.id,
      );

    if (connectedAccounts?.length) {
      return {
        skipSyncEmail: true,
      };
    }

    const skipSyncEmail = await this.keyValuePairRepository.findOne({
      where: {
        userId: user.id,
        workspaceId: workspace.id,
        key: UserStateKeys.EMAIL_SYNC_ONBOARDING_STEP,
      },
    });

    return {
      skipSyncEmail:
        !!skipSyncEmail && skipSyncEmail.value === EmailSyncStatus.SKIPPED,
    };
  }

  async skipSyncEmail(
    userId: string,
    workspaceId: string,
  ): Promise<SkipSyncEmail> {
    await this.keyValuePairRepository.upsert(
      {
        userId,
        workspaceId,
        key: UserStateKeys.EMAIL_SYNC_ONBOARDING_STEP,
        value: EmailSyncStatus.SKIPPED,
      },
      { conflictPaths: ['userId', 'workspaceId', 'key'] },
    );

    return { success: true };
  }
}
