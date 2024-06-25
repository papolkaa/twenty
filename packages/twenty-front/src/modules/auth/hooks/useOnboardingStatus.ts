import { useRecoilValue } from 'recoil';

import { useIsLogged } from '@/auth/hooks/useIsLogged';
import { currentUserState } from '@/auth/states/currentUserState';
import { OnboardingStatus } from '~/generated/graphql';

export const useOnboardingStatus = (): OnboardingStatus | null | undefined => {
  const currentUser = useRecoilValue(currentUserState);
  const isLoggedIn = useIsLogged();
  if (!isLoggedIn) {
    return undefined;
  }
  return currentUser?.onboardingStatus;
};
