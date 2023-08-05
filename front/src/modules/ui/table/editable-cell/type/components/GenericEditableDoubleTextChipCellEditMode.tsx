import { useRecoilState } from 'recoil';

import {
  ViewFieldDefinition,
  ViewFieldDoubleTextChipMetadata,
} from '@/ui/editable-field/types/ViewField';
import { useCurrentRowEntityId } from '@/ui/table/hooks/useCurrentEntityId';
import { useUpdateEntityField } from '@/ui/table/hooks/useUpdateEntityField';
import { tableEntityFieldFamilySelector } from '@/ui/table/states/tableEntityFieldFamilySelector';

import { DoubleTextCellEdit } from './DoubleTextCellEdit';

type OwnProps = {
  viewField: ViewFieldDefinition<ViewFieldDoubleTextChipMetadata>;
};

export function GenericEditableDoubleTextChipCellEditMode({
  viewField,
}: OwnProps) {
  const currentRowEntityId = useCurrentRowEntityId();

  // TODO: we could use a hook that would return the field value with the right type
  const [firstValue, setFirstValue] = useRecoilState<string>(
    tableEntityFieldFamilySelector({
      entityId: currentRowEntityId ?? '',
      fieldName: viewField.metadata.firstValueFieldName,
    }),
  );

  const [secondValue, setSecondValue] = useRecoilState<string>(
    tableEntityFieldFamilySelector({
      entityId: currentRowEntityId ?? '',
      fieldName: viewField.metadata.secondValueFieldName,
    }),
  );

  const updateField = useUpdateEntityField();

  function handleSubmit(newFirstValue: string, newSecondValue: string) {
    const firstValueChanged = newFirstValue !== firstValue;
    const secondValueChanged = newSecondValue !== secondValue;

    if (firstValueChanged) {
      setFirstValue(newFirstValue);
    }

    if (secondValueChanged) {
      setSecondValue(newSecondValue);
    }

    if (
      currentRowEntityId &&
      updateField &&
      (firstValueChanged || secondValueChanged)
    ) {
      updateField(currentRowEntityId, viewField, {
        firstValue: firstValueChanged ? newFirstValue : firstValue,
        secondValue: secondValueChanged ? newSecondValue : secondValue,
      });
    }
  }

  return (
    <DoubleTextCellEdit
      firstValuePlaceholder={viewField.metadata.firstValuePlaceholder}
      secondValuePlaceholder={viewField.metadata.secondValuePlaceholder}
      firstValue={firstValue ?? ''}
      secondValue={secondValue ?? ''}
      onSubmit={handleSubmit}
    />
  );
}
