/* @license Enterprise */

import { SaveAndCancelButtons } from '@/settings/components/SaveAndCancelButtons/SaveAndCancelButtons';
import SettingsSSOIdentitiesProvidersForm from '@/settings/security/components/SettingsSSOIdentitiesProvidersForm';
import { useCreateSSOIdentityProvider } from '@/settings/security/hooks/useCreateSSOIdentityProvider';
import { SSOIdentitiesProvidersParamsSchema } from '@/settings/security/schemas/SSOIdentityProviderSchema';
import { SettingSecurityNewSSOIdentityFormValues } from '@/settings/security/types/SSOIdentityProvider';
import { defaultIdpValues } from '@/settings/security/utils/SSOIdentityProviderDefaultValues';
import { getSettingsPagePath } from '@/settings/utils/getSettingsPagePath';
import { SettingsPath } from '@/types/SettingsPath';
import { SnackBarVariant } from '@/ui/feedback/snack-bar-manager/components/SnackBar';
import { useSnackBar } from '@/ui/feedback/snack-bar-manager/hooks/useSnackBar';
import { SubMenuTopBarContainer } from '@/ui/layout/page/SubMenuTopBarContainer';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const SettingsSecuritySSOIdentifyProvider = () => {
  const navigate = useNavigate();

  const { enqueueSnackBar } = useSnackBar();
  const { createSSOIdentityProvider } = useCreateSSOIdentityProvider();

  const formConfig = useForm<SettingSecurityNewSSOIdentityFormValues>({
    mode: 'onChange',
    resolver: zodResolver(SSOIdentitiesProvidersParamsSchema),
    defaultValues: Object.values(defaultIdpValues).reduce(
      (acc, fn) => ({ ...acc, ...fn() }),
      {},
    ),
  });

  const selectedType = formConfig.watch('type');

  useEffect(
    () =>
      formConfig.reset({
        ...defaultIdpValues[selectedType](),
        name: formConfig.getValues('name'),
      }),
    [formConfig, selectedType],
  );

  const handleSave = async () => {
    try {
      await createSSOIdentityProvider(formConfig.getValues());
      navigate(getSettingsPagePath(SettingsPath.Security));
    } catch (error) {
      enqueueSnackBar((error as Error).message, {
        variant: SnackBarVariant.Error,
      });
    }
  };

  return (
    <SubMenuTopBarContainer
      title="New SSO Configuration"
      actionButton={
        <SaveAndCancelButtons
          isSaveDisabled={!formConfig.formState.isValid}
          onCancel={() => navigate(getSettingsPagePath(SettingsPath.Security))}
          onSave={handleSave}
        />
      }
      links={[
        {
          children: 'Workspace',
          href: getSettingsPagePath(SettingsPath.Workspace),
        },
        {
          children: 'Security',
          href: getSettingsPagePath(SettingsPath.Security),
        },
        { children: 'New' },
      ]}
    >
      <FormProvider
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...formConfig}
      >
        <SettingsSSOIdentitiesProvidersForm />
      </FormProvider>
    </SubMenuTopBarContainer>
  );
};
