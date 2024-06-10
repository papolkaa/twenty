import { Injectable } from '@nestjs/common';

import { KeyValuePairService } from 'src/engine/core-modules/key-value-pair/key-value-pair.service';
import { OnboardingStep } from 'src/engine/core-modules/onboarding/enums/onboarding-step.enum';
import { User } from 'src/engine/core-modules/user/user.entity';
import { Workspace } from 'src/engine/core-modules/workspace/workspace.entity';
import { UserWorkspaceService } from 'src/engine/core-modules/user-workspace/user-workspace.service';
import { InjectObjectMetadataRepository } from 'src/engine/object-metadata-repository/object-metadata-repository.decorator';
import { ConnectedAccountWorkspaceEntity } from 'src/modules/connected-account/standard-objects/connected-account.workspace-entity';
import { ConnectedAccountRepository } from 'src/modules/connected-account/repositories/connected-account.repository';
import { KeyValueTypes } from 'src/engine/core-modules/key-value-pair/enums/key-value-types.enum';
import { OnboardingStepKeys } from 'src/engine/core-modules/key-value-pair/enums/keys/onboarding-step-keys.enum';
import { OnboardingStateValues } from 'src/engine/core-modules/key-value-pair/enums/values/onboarding-step-values.enum';

@Injectable()
export class OnboardingService {
  constructor(
    private readonly userWorkspaceService: UserWorkspaceService,
    private readonly keyValuePairService: KeyValuePairService<KeyValueTypes.ONBOARDING>,
    @InjectObjectMetadataRepository(ConnectedAccountWorkspaceEntity)
    private readonly connectedAccountRepository: ConnectedAccountRepository,
  ) {}

  private async isSyncEmailOnboardingStep(user: User, workspace: Workspace) {
    const syncEmailValue = await this.keyValuePairService.get({
      userId: user.id,
      workspaceId: workspace.id,
      key: OnboardingStepKeys.SYNC_EMAIL_ONBOARDING_STEP,
    });
    const isSyncEmailSkipped = syncEmailValue === OnboardingStateValues.SKIPPED;
    const connectedAccounts =
      await this.connectedAccountRepository.getAllByUserId(
        user.id,
        workspace.id,
      );

    return !isSyncEmailSkipped && !connectedAccounts?.length;
  }

  private async isInviteTeamOnboardingStep(workspace: Workspace) {
    const inviteTeamValue = await this.keyValuePairService.get({
      workspaceId: workspace.id,
      key: OnboardingStepKeys.INVITE_TEAM_ONBOARDING_STEP,
    });
    const isInviteTeamSkipped =
      inviteTeamValue === OnboardingStateValues.SKIPPED;
    const workspaceMemberCount =
      await this.userWorkspaceService.getWorkspaceMemberCount(workspace.id);

    return (
      !isInviteTeamSkipped &&
      (!workspaceMemberCount || workspaceMemberCount <= 1)
    );
  }

  async getOnboardingState(
    user: User,
    workspace: Workspace,
  ): Promise<OnboardingStep | null> {
    if (await this.isSyncEmailOnboardingStep(user, workspace)) {
      return OnboardingStep.SYNC_EMAIL;
    }

    if (await this.isInviteTeamOnboardingStep(workspace)) {
      return OnboardingStep.INVITE_TEAM;
    }

    return null;
  }

  async skipInviteTeamOnboardingStep(workspaceId: string) {
    await this.keyValuePairService.set({
      workspaceId,
      key: OnboardingStepKeys.INVITE_TEAM_ONBOARDING_STEP,
      value: OnboardingStateValues.SKIPPED,
    });
  }

  async skipSyncEmailOnboardingStep(userId: string, workspaceId: string) {
    await this.keyValuePairService.set({
      userId,
      workspaceId,
      key: OnboardingStepKeys.SYNC_EMAIL_ONBOARDING_STEP,
      value: OnboardingStateValues.SKIPPED,
    });
  }
}
