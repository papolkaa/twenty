import { useContext } from 'react';
import { useRecoilState } from 'recoil';

import { FieldRelationValue } from '@/object-record/record-field/types/FieldMetadata';
import { recordStoreFamilySelector } from '@/object-record/record-store/states/selectors/recordStoreFamilySelector';
import { FIELD_EDIT_BUTTON_WIDTH } from '@/ui/field/display/constants/FieldEditButtonWidth';
import { FieldMetadataType } from '~/generated-metadata/graphql';
import { isDefined } from '~/utils/isDefined';

import { FieldContext } from '../../contexts/FieldContext';
import { assertFieldMetadata } from '../../types/guards/assertFieldMetadata';
import { isFieldRelation } from '../../types/guards/isFieldRelation';

export const useRelationFieldDisplay = () => {
  const { entityId, fieldDefinition, maxWidth } = useContext(FieldContext);

  assertFieldMetadata(
    FieldMetadataType.Relation,
    isFieldRelation,
    fieldDefinition,
  );

  const button = fieldDefinition.editButtonIcon;

  const fieldName = fieldDefinition.metadata.fieldName;

  const [fieldValue, setFieldValue] = useRecoilState<FieldRelationValue>(
    recordStoreFamilySelector({ recordId: entityId, fieldName }),
  );

  // // const tableValue = useContextSelector(
  // //   RecordFieldValueSelectorContext,
  // //   (value) => value[0],
  // // );

  // // console.log({
  // //   tableValue,
  // // });

  // const fieldValue = useRecordFieldValue(entityId, fieldName);

  const maxWidthForField =
    isDefined(button) && isDefined(maxWidth)
      ? maxWidth - FIELD_EDIT_BUTTON_WIDTH
      : maxWidth;

  return {
    fieldDefinition,
    fieldValue,
    maxWidth: maxWidthForField,
  };
};
