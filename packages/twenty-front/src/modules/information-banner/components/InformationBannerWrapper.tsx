import { InformationBannerAccountToReconnect } from '@/information-banner/components/InformationBannerReconnectAccount';

export enum InformationBannerKeys {
  ACCOUNTS_TO_RECONNECT_INSUFFICIENT_PERMISSIONS = 'ACCOUNTS_TO_RECONNECT_INSUFFICIENT_PERMISSIONS',
  ACCOUNTS_TO_RECONNECT_EMAIL_ALIASES = 'ACCOUNTS_TO_RECONNECT_EMAIL_ALIASES',
}

export const InformationBannerWrapper = () => {
  return (
    <>
      <InformationBannerAccountToReconnect />
    </>
  );
};
