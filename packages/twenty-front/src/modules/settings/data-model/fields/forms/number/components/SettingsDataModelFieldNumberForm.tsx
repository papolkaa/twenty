import { Controller, useFormContext } from 'react-hook-form';
import { z } from 'zod';

import { FieldMetadataItem } from '@/object-metadata/types/FieldMetadataItem';
import { numberFieldDefaultValueSchema } from '@/object-record/record-field/validation-schemas/numberFieldDefaultValueSchema';
import { SettingsDataModelFieldNumberDecimalsInput } from '@/settings/data-model/fields/forms/number/components/SettingsDataModelFieldNumberDecimalInput';
import { CardContent } from '@/ui/layout/card/components/CardContent';

export const settingsDataModelFieldNumberFormSchema = z.object({
  settings: numberFieldDefaultValueSchema,
});

export type SettingsDataModelFieldNumberFormValues = z.infer<
  typeof settingsDataModelFieldNumberFormSchema
>;

type SettingsDataModelFieldNumberFormProps = {
  disabled?: boolean;
  fieldMetadataItem: Pick<
    FieldMetadataItem,
    'icon' | 'label' | 'type' | 'defaultValue' | 'settings'
  >;
};

export const SettingsDataModelFieldNumberForm = ({
  disabled,
  fieldMetadataItem,
}: SettingsDataModelFieldNumberFormProps) => {
  const { control } = useFormContext<SettingsDataModelFieldNumberFormValues>();

  return (
    <CardContent>
      <Controller
        disabled={disabled}
        name="settings"
        defaultValue={{ decimals: fieldMetadataItem?.settings?.decimals ?? 0 }}
        control={control}
        render={({ field: { onChange, value } }) => {
          const count = value?.decimals ?? 0;

          return (
            <SettingsDataModelFieldNumberDecimalsInput
              value={count}
              onChange={(value) => onChange({ decimals: value })}
            ></SettingsDataModelFieldNumberDecimalsInput>
          );
        }}
      />
    </CardContent>
  );
};
