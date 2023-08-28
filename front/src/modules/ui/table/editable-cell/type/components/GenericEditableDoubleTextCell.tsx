import { useRecoilValue } from 'recoil';

import type { ViewFieldDoubleTextMetadata } from '@/ui/editable-field/types/ViewField';
import { TextInputDisplay } from '@/ui/input/text/components/TextInputDisplay';
import { EditableCell } from '@/ui/table/editable-cell/components/EditableCell';
import { useCurrentRowEntityId } from '@/ui/table/hooks/useCurrentEntityId';
import { tableEntityFieldFamilySelector } from '@/ui/table/states/selectors/tableEntityFieldFamilySelector';

import type { ColumnDefinition } from '../../../types/ColumnDefinition';

import { GenericEditableDoubleTextCellEditMode } from './GenericEditableDoubleTextCellEditMode';

type OwnProps = {
  columnDefinition: ColumnDefinition<ViewFieldDoubleTextMetadata>;
};

export function GenericEditableDoubleTextCell({ columnDefinition }: OwnProps) {
  const currentRowEntityId = useCurrentRowEntityId();

  const firstValue = useRecoilValue<string>(
    tableEntityFieldFamilySelector({
      entityId: currentRowEntityId ?? '',
      fieldName: columnDefinition.metadata.firstValueFieldName,
    }),
  );

  const secondValue = useRecoilValue<string>(
    tableEntityFieldFamilySelector({
      entityId: currentRowEntityId ?? '',
      fieldName: columnDefinition.metadata.secondValueFieldName,
    }),
  );

  const displayName = `${firstValue ?? ''} ${secondValue ?? ''}`;

  return (
    <EditableCell
      editModeContent={
        <GenericEditableDoubleTextCellEditMode
          columnDefinition={columnDefinition}
        />
      }
      nonEditModeContent={<TextInputDisplay>{displayName}</TextInputDisplay>}
    ></EditableCell>
  );
}
