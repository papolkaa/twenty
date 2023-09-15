import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { currentUserState } from '@/auth/states/currentUserState';
import { useGetCurrentUserQuery, WorkspaceMember } from '~/generated/graphql';

export function UserProvider({ children }: React.PropsWithChildren) {
  const [, setCurrentUser] = useRecoilState(currentUserState);
  const [isLoading, setIsLoading] = useState(true);

  const { data, loading } = useGetCurrentUserQuery();

  useEffect(() => {
    if (!loading) {
      setIsLoading(false);
    }
    if (data?.currentUser) {
      setCurrentUser({
        ...data?.currentUser,
        workspaceMember: data.currentUser.workspaceMember as WorkspaceMember,
      });
    }
  }, [setCurrentUser, data, isLoading, loading]);

  return isLoading ? <></> : <>{children}</>;
}
