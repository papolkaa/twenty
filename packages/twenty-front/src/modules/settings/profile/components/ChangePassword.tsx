import { useRecoilValue } from 'recoil';
import { Button, H2Title, useSnackBar } from 'twenty-ui';

import { currentUserState } from '@/auth/states/currentUserState';
import { useEmailPasswordResetLinkMutation } from '~/generated/graphql';

export const ChangePassword = () => {
  const { enqueueSnackBar } = useSnackBar();

  const currentUser = useRecoilValue(currentUserState);

  const [emailPasswordResetLink] = useEmailPasswordResetLinkMutation();

  const handlePasswordResetClick = async () => {
    if (!currentUser?.email) {
      enqueueSnackBar('Invalid email', {
        variant: 'error',
      });
      return;
    }

    try {
      const { data } = await emailPasswordResetLink({
        variables: {
          email: currentUser.email,
        },
      });
      if (data?.emailPasswordResetLink?.success === true) {
        enqueueSnackBar('Password reset link has been sent to the email', {
          variant: 'success',
        });
      } else {
        enqueueSnackBar('There was some issue', {
          variant: 'error',
        });
      }
    } catch (error) {
      enqueueSnackBar((error as Error).message, {
        variant: 'error',
      });
    }
  };

  return (
    <>
      <H2Title
        title="Change Password"
        description="Receive an email containing password update link"
      />
      <Button
        onClick={handlePasswordResetClick}
        variant="secondary"
        title="Change Password"
      />
    </>
  );
};
