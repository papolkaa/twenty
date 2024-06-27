import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { KeyValuePairService } from 'src/engine/core-modules/key-value-pair/key-value-pair.service';
import { OnboardingStatus } from 'src/engine/core-modules/onboarding/enums/onboarding-status.enum';
import { User } from 'src/engine/core-modules/user/user.entity';
import { Workspace } from 'src/engine/core-modules/workspace/workspace.entity';
import { UserWorkspaceService } from 'src/engine/core-modules/user-workspace/user-workspace.service';
import { InjectObjectMetadataRepository } from 'src/engine/object-metadata-repository/object-metadata-repository.decorator';
import { ConnectedAccountWorkspaceEntity } from 'src/modules/connected-account/standard-objects/connected-account.workspace-entity';
import { ConnectedAccountRepository } from 'src/modules/connected-account/repositories/connected-account.repository';
import { WorkspaceMemberWorkspaceEntity } from 'src/modules/workspace-member/standard-objects/workspace-member.workspace-entity';
import { WorkspaceManagerService } from 'src/engine/workspace-manager/workspace-manager.service';
import { EnvironmentService } from 'src/engine/integrations/environment/environment.service';
import { InjectWorkspaceRepository } from 'src/engine/twenty-orm/decorators/inject-workspace-repository.decorator';
import { WorkspaceRepository } from 'src/engine/twenty-orm/repository/workspace.repository';
import { SubscriptionStatus } from 'src/engine/core-modules/billing/entities/billing-subscription.entity';
import { isDefined } from 'src/utils/is-defined';
import {
  FeatureFlagEntity,
  FeatureFlagKeys,
} from 'src/engine/core-modules/feature-flag/feature-flag.entity';
import { BillingService } from 'src/engine/core-modules/billing/billing.service';

enum OnboardingStepValues {
  SKIPPED = 'SKIPPED',
}

enum OnboardingStepKeys {
  SYNC_EMAIL_ONBOARDING_STEP = 'SYNC_EMAIL_ONBOARDING_STEP',
  INVITE_TEAM_ONBOARDING_STEP = 'INVITE_TEAM_ONBOARDING_STEP',
}

type OnboardingKeyValueType = {
  [OnboardingStepKeys.SYNC_EMAIL_ONBOARDING_STEP]: OnboardingStepValues;
  [OnboardingStepKeys.INVITE_TEAM_ONBOARDING_STEP]: OnboardingStepValues;
};

@Injectable()
export class OnboardingService {
  constructor(
    private readonly billingService: BillingService,
    private readonly workspaceManagerService: WorkspaceManagerService,
    private readonly environmentService: EnvironmentService,
    private readonly userWorkspaceService: UserWorkspaceService,
    private readonly keyValuePairService: KeyValuePairService<OnboardingKeyValueType>,
    @InjectObjectMetadataRepository(ConnectedAccountWorkspaceEntity)
    private readonly connectedAccountRepository: ConnectedAccountRepository,
    @InjectWorkspaceRepository(WorkspaceMemberWorkspaceEntity)
    private readonly workspaceMemberRepository: WorkspaceRepository<WorkspaceMemberWorkspaceEntity>,
    @InjectRepository(FeatureFlagEntity, 'core')
    private readonly featureFlagRepository: Repository<FeatureFlagEntity>,
  ) {}

  private async isSubscriptionIncompleteOnboardingStatus(user: User) {
    const isFreeAccessEnabled = await this.featureFlagRepository.findOneBy({
      workspaceId: user.defaultWorkspaceId,
      key: FeatureFlagKeys.IsFreeAccessEnabled,
      value: true,
    });

    if (
      isFreeAccessEnabled ||
      !this.environmentService.get('IS_BILLING_ENABLED')
    ) {
      return false;
    }

    const currentBillingSubscription =
      await this.billingService.getCurrentBillingSubscription({
        workspaceId: user.defaultWorkspaceId,
      });

    return (
      !isDefined(currentBillingSubscription) ||
      currentBillingSubscription?.status === SubscriptionStatus.Incomplete
    );
  }

  private async isWorkspaceActivationOnboardingStatus(user: User) {
    return !(await this.workspaceManagerService.doesDataSourceExist(
      user.defaultWorkspaceId,
    ));
  }

  private async isProfileCreationOnboardingStatus(user: User) {
    const workspaceMember = await this.workspaceMemberRepository.findOneBy({
      userId: user.id,
    });

    return (
      workspaceMember &&
      (!workspaceMember.name.firstName || !workspaceMember.name.lastName)
    );
  }

  private async isSyncEmailOnboardingStatus(user: User) {
    const syncEmailValue = await this.keyValuePairService.get({
      userId: user.id,
      workspaceId: user.defaultWorkspaceId,
      key: OnboardingStepKeys.SYNC_EMAIL_ONBOARDING_STEP,
    });
    const isSyncEmailSkipped = syncEmailValue === OnboardingStepValues.SKIPPED;
    const connectedAccounts =
      await this.connectedAccountRepository.getAllByUserId(
        user.id,
        user.defaultWorkspaceId,
      );

    return !isSyncEmailSkipped && !connectedAccounts?.length;
  }

  private async isInviteTeamOnboardingStatus(workspace: Workspace) {
    const inviteTeamValue = await this.keyValuePairService.get({
      workspaceId: workspace.id,
      key: OnboardingStepKeys.INVITE_TEAM_ONBOARDING_STEP,
    });
    const isInviteTeamSkipped =
      inviteTeamValue === OnboardingStepValues.SKIPPED;
    const workspaceMemberCount =
      await this.userWorkspaceService.getWorkspaceMemberCount();

    return (
      !isInviteTeamSkipped &&
      (!workspaceMemberCount || workspaceMemberCount <= 1)
    );
  }

  async getOnboardingStatus(user: User) {
    if (await this.isSubscriptionIncompleteOnboardingStatus(user)) {
      return OnboardingStatus.PLAN_REQUIRED;
    }

    if (await this.isWorkspaceActivationOnboardingStatus(user)) {
      return OnboardingStatus.WORKSPACE_ACTIVATION;
    }

    if (await this.isProfileCreationOnboardingStatus(user)) {
      return OnboardingStatus.PROFILE_CREATION;
    }

    if (await this.isSyncEmailOnboardingStatus(user)) {
      return OnboardingStatus.SYNC_EMAIL;
    }

    if (await this.isInviteTeamOnboardingStatus(user.defaultWorkspace)) {
      return OnboardingStatus.INVITE_TEAM;
    }

    return OnboardingStatus.COMPLETED;
  }

  async skipInviteTeamOnboardingStep(workspaceId: string) {
    await this.keyValuePairService.set({
      workspaceId,
      key: OnboardingStepKeys.INVITE_TEAM_ONBOARDING_STEP,
      value: OnboardingStepValues.SKIPPED,
    });
  }

  async skipSyncEmailOnboardingStep(userId: string, workspaceId: string) {
    await this.keyValuePairService.set({
      userId,
      workspaceId,
      key: OnboardingStepKeys.SYNC_EMAIL_ONBOARDING_STEP,
      value: OnboardingStepValues.SKIPPED,
    });
  }
}
