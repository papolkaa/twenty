import { isNonEmptyString, isUndefined } from '@sniptt/guards';
import { useIcons } from 'twenty-ui';

import { useObjectMetadataItem } from '@/object-metadata/hooks/useObjectMetadataItem';
import { useCreateManyRecords } from '@/object-record/hooks/useCreateManyRecords';
import { getSpreadSheetValidation } from '@/object-record/spreadsheet-import/util/getSpreadSheetValidation';
import { useSpreadsheetImport } from '@/spreadsheet-import/hooks/useSpreadsheetImport';
import { Field, SpreadsheetOptions } from '@/spreadsheet-import/types';
import { SnackBarVariant } from '@/ui/feedback/snack-bar-manager/components/SnackBar';
import { useSnackBar } from '@/ui/feedback/snack-bar-manager/hooks/useSnackBar';
import { FieldMetadataType } from '~/generated-metadata/graphql';
import { convertCurrencyMicrosToCurrency } from '~/utils/convert-currency-amount';
import { isDefined } from '~/utils/isDefined';

const firstName = 'Firstname';
const lastName = 'Lastname';

const currencyCode = 'Currency Code';
const amountMicros = 'Amount';

const addressFields = {
  addressStreet1: 'Address 1',
  addressStreet2: 'Address 2',
  addressCity: 'City',
  addressPostcode: 'Post Code',
  addressState: 'State',
  addressCountry: 'Country',
  addressLat: 'Latitude',
  addressLng: 'Longitude',
};

export const useSpreadsheetRecordImport = (objectNameSingular: string) => {
  const { openSpreadsheetImport } = useSpreadsheetImport<any>();
  const { enqueueSnackBar } = useSnackBar();
  const { getIcon } = useIcons();

  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });
  const fields = objectMetadataItem.fields
    .filter(
      (x) =>
        x.isActive &&
        (!x.isSystem || x.name === 'id') &&
        x.name !== 'createdAt' &&
        (x.type !== FieldMetadataType.Relation || x.toRelationMetadata),
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const templateFields: Field<string>[] = [];
  for (const field of fields) {
    if (field.type === FieldMetadataType.FullName) {
      templateFields.push({
        icon: getIcon(field.icon),
        label: `${firstName} (${field.label})`,
        key: `${firstName} (${field.name})`,
        fieldType: {
          type: 'input',
        },
        validations: getSpreadSheetValidation(
          field.type,
          `${firstName} (${field.label})`,
        ),
      });
      templateFields.push({
        icon: getIcon(field.icon),
        label: `${lastName} (${field.label})`,
        key: `${lastName} (${field.name})`,
        fieldType: {
          type: 'input',
        },
        validations: getSpreadSheetValidation(
          field.type,
          `${lastName} (${field.label})`,
        ),
      });
    } else if (field.type === FieldMetadataType.Relation) {
      templateFields.push({
        icon: getIcon(field.icon),
        label: field.label + ' (ID)',
        key: field.name,
        fieldType: {
          type: 'input',
        },
        validations: getSpreadSheetValidation(
          field.type,
          field.label + ' (ID)',
        ),
      });
    } else if (field.type === FieldMetadataType.Currency) {
      templateFields.push({
        icon: getIcon(field.icon),
        label: `${currencyCode} (${field.label})`,
        key: `${currencyCode} (${field.name})`,
        fieldType: {
          type: 'input',
        },
        validations: getSpreadSheetValidation(
          field.type,
          `${currencyCode} (${field.label})`,
        ),
      });
      templateFields.push({
        icon: getIcon(field.icon),
        label: `${amountMicros} (${field.label})`,
        key: `${amountMicros} (${field.name})`,
        fieldType: {
          type: 'input',
        },
        validations: getSpreadSheetValidation(
          field.type,
          `${amountMicros} (${field.label})`,
        ),
      });
    } else if (field.type === FieldMetadataType.Address) {
      Object.entries(addressFields).forEach(([_, value]) => {
        templateFields.push({
          icon: getIcon(field.icon),
          label: `${value} (${field.label})`,
          key: `${value} (${field.name})`,
          fieldType: {
            type: 'input',
          },
          validations: getSpreadSheetValidation(
            field.type,
            `${value} (${field.label})`,
          ),
        });
      });
    } else if (field.type === FieldMetadataType.Select) {
      templateFields.push({
        icon: getIcon(field.icon),
        label: field.label,
        key: field.name,
        fieldType: {
          type: 'select',
          options:
            field.options?.map((option) => ({
              label: option.label,
              value: option.value,
            })) || [],
        },
        validations: getSpreadSheetValidation(
          field.type,
          field.label + ' (ID)',
        ),
      });
    } else if (field.type === FieldMetadataType.Boolean) {
      templateFields.push({
        icon: getIcon(field.icon),
        label: field.label,
        key: field.name,
        fieldType: {
          type: 'checkbox',
        },
        validations: getSpreadSheetValidation(field.type, field.label),
      });
    } else {
      templateFields.push({
        icon: getIcon(field.icon),
        label: field.label,
        key: field.name,
        fieldType: {
          type: 'input',
        },
        validations: getSpreadSheetValidation(field.type, field.label),
      });
    }
  }

  const { createManyRecords } = useCreateManyRecords({
    objectNameSingular,
  });

  const openRecordSpreadsheetImport = (
    options?: Omit<SpreadsheetOptions<any>, 'fields' | 'isOpen' | 'onClose'>,
  ) => {
    openSpreadsheetImport({
      ...options,
      onSubmit: async (data) => {
        const createInputs = data.validData.map((record) => {
          const fieldMapping: Record<string, any> = {};
          for (const field of fields) {
            const value = record[field.name];

            if (isUndefined(value)) {
              continue;
            }

            switch (field.type) {
              case FieldMetadataType.Boolean:
                if (value !== undefined) {
                  fieldMapping[field.name] = value === 'true' || value === true;
                }
                break;
              case FieldMetadataType.Number:
              case FieldMetadataType.Numeric:
                if (value !== undefined) {
                  fieldMapping[field.name] = Number(value);
                }
                break;
              case FieldMetadataType.Currency:
                if (
                  isDefined(
                    record[`${amountMicros} (${field.name})`] ||
                      record[`${currencyCode} (${field.name})`],
                  )
                ) {
                  fieldMapping[field.name] = {
                    amountMicros: convertCurrencyMicrosToCurrency(
                      Number(record[`${amountMicros} (${field.name})`]),
                    ),
                    currencyCode:
                      record[`${currencyCode} (${field.name})`] || 'USD',
                  };
                }
                break;
              case FieldMetadataType.Address: {
                if (
                  isDefined(
                    record[`${addressFields.addressStreet1} (${field.name})`] ||
                      record[
                        `${addressFields.addressStreet2} (${field.name})`
                      ] ||
                      record[`${addressFields.addressCity} (${field.name})`] ||
                      record[
                        `${addressFields.addressPostcode} (${field.name})`
                      ] ||
                      record[`${addressFields.addressState} (${field.name})`] ||
                      record[
                        `${addressFields.addressCountry} (${field.name})`
                      ] ||
                      record[`${addressFields.addressLat} (${field.name})`] ||
                      record[`${addressFields.addressLng} (${field.name})`],
                  )
                ) {
                  fieldMapping[field.name] = {
                    addressStreet1:
                      record[
                        `${addressFields.addressStreet1} (${field.name})`
                      ] || '',
                    addressStreet2:
                      record[
                        `${addressFields.addressStreet2} (${field.name})`
                      ] || '',
                    addressCity:
                      record[`${addressFields.addressCity} (${field.name})`] ||
                      '',
                    addressPostcode: Number(
                      record[
                        `${addressFields.addressPostcode} (${field.name})`
                      ],
                    ),
                    addressState:
                      record[`${addressFields.addressState} (${field.name})`] ||
                      '',
                    addressCountry:
                      record[
                        `${addressFields.addressCountry} (${field.name})`
                      ] || '',
                    addressLat: Number(
                      record[`${addressFields.addressLat} (${field.name})`],
                    ),
                    addressLng: Number(
                      record[`${addressFields.addressLng} (${field.name})`],
                    ),
                  };
                }
                break;
              }
              case FieldMetadataType.Link:
                if (value !== undefined) {
                  fieldMapping[field.name] = {
                    label: field.name,
                    url: value || null,
                  };
                }
                break;
              case FieldMetadataType.Relation:
                if (
                  isDefined(value) &&
                  (isNonEmptyString(value) || value !== false)
                ) {
                  fieldMapping[field.name + 'Id'] = value;
                }
                break;
              case FieldMetadataType.FullName:
                if (
                  isDefined(
                    record[`${firstName} (${field.name})`] ||
                      record[`${lastName} (${field.name})`],
                  )
                ) {
                  fieldMapping[field.name] = {
                    firstName: record[`${firstName} (${field.name})`] || '',
                    lastName: record[`${lastName} (${field.name})`] || '',
                  };
                }
                break;
              default:
                if (value !== undefined) {
                  fieldMapping[field.name] = value;
                }
                break;
            }
          }
          return fieldMapping;
        });
        try {
          await createManyRecords(createInputs, true);
        } catch (error: any) {
          enqueueSnackBar(error?.message || 'Something went wrong', {
            variant: SnackBarVariant.Error,
          });
        }
      },
      fields: templateFields,
    });
  };

  return { openRecordSpreadsheetImport };
};
