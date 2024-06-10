import { useRecoilCallback, useSetRecoilState } from 'recoil';

import { currentUserState } from '@/auth/states/currentUserState';
import { CoreObjectNameSingular } from '@/object-metadata/types/CoreObjectNameSingular';
import { useFindManyRecords } from '@/object-record/hooks/useFindManyRecords';
import { WorkspaceMember } from '@/workspace-member/types/WorkspaceMember';
import { OnboardingStep } from '~/generated/graphql';

const getNextOnboardingState = (
  currentOnboardingStep: OnboardingStep,
  workspaceMembers: WorkspaceMember[],
) => {
  if (currentOnboardingStep === OnboardingStep.SyncEmail) {
    return workspaceMembers.length === 1 ? OnboardingStep.InviteTeam : null;
  }
  return null;
};

export const useSetNextOnboardingStep = () => {
  const setCurrentUser = useSetRecoilState(currentUserState);
  const { records: workspaceMembers } = useFindManyRecords<WorkspaceMember>({
    objectNameSingular: CoreObjectNameSingular.WorkspaceMember,
  });
  return useRecoilCallback(
    () => (currentOnboardingStep: OnboardingStep) => {
      setCurrentUser(
        (current) =>
          ({
            ...current,
            onboardingStep: getNextOnboardingState(
              currentOnboardingStep,
              workspaceMembers,
            ),
          }) as any,
      );
    },
    [setCurrentUser, workspaceMembers],
  );
};
