import { useCallback, useMemo } from 'react';
import { OnDragEndResponder } from '@hello-pangea/dnd';
import { useRecoilState } from 'recoil';

import { useColumnDefinitionsFromFieldMetadata } from '@/object-metadata/hooks/useColumnDefinitionsFromFieldMetadata';
import { useObjectMetadataItemOnly } from '@/object-metadata/hooks/useObjectMetadataItemOnly';
import { useRecordBoard } from '@/object-record/record-board/hooks/useRecordBoard';
import { FieldMetadata } from '@/object-record/record-field/types/FieldMetadata';
import { recordIndexFieldDefinitionsState } from '@/object-record/record-index/states/recordIndexFieldDefinitionsState';
import { ColumnDefinition } from '@/object-record/record-table/types/ColumnDefinition';
import { useHandleViews } from '@/views/hooks/useHandleViews';
import { useSaveCurrentViewFields } from '@/views/hooks/useSaveCurrentViewFields';
import { GraphQLView } from '@/views/types/GraphQLView';
import { mapBoardFieldDefinitionsToViewFields } from '@/views/utils/mapBoardFieldDefinitionsToViewFields';
import { mapArrayToObject } from '~/utils/array/mapArrayToObject';
import { moveArrayItem } from '~/utils/array/moveArrayItem';
import { isDeeplyEqual } from '~/utils/isDeeplyEqual';

type useRecordIndexOptionsForBoardParams = {
  objectNameSingular: string;
  recordBoardId: string;
  viewBarId: string;
};

export const useRecordIndexOptionsForBoard = ({
  objectNameSingular,
  recordBoardId,
  viewBarId,
}: useRecordIndexOptionsForBoardParams) => {
  const [recordIndexFieldDefinitions, setRecordIndexFieldDefinitions] =
    useRecoilState(recordIndexFieldDefinitionsState);

  const { saveViewFields } = useSaveCurrentViewFields(viewBarId);
  const { updateCurrentView } = useHandleViews(viewBarId);
  const { isCompactModeActiveState } = useRecordBoard(recordBoardId);

  const [isCompactModeActive, setIsCompactModeActive] = useRecoilState(
    isCompactModeActiveState,
  );

  const { objectMetadataItem } = useObjectMetadataItemOnly({
    objectNameSingular,
  });

  const { columnDefinitions } =
    useColumnDefinitionsFromFieldMetadata(objectMetadataItem);

  const availableColumnDefinitions = useMemo(
    () =>
      columnDefinitions.filter(({ isLabelIdentifier }) => !isLabelIdentifier),
    [columnDefinitions],
  );

  const recordIndexFieldDefinitionsByKey = useMemo(
    () =>
      mapArrayToObject(
        recordIndexFieldDefinitions,
        ({ fieldMetadataId }) => fieldMetadataId,
      ),
    [recordIndexFieldDefinitions],
  );

  const visibleBoardFields = useMemo(
    () =>
      recordIndexFieldDefinitions
        .filter((boardField) => boardField.isVisible)
        .sort(
          (boardFieldA, boardFieldB) =>
            boardFieldA.position - boardFieldB.position,
        ),
    [recordIndexFieldDefinitions],
  );

  const hiddenBoardFields = useMemo(
    () =>
      availableColumnDefinitions
        .filter(
          ({ fieldMetadataId }) =>
            !recordIndexFieldDefinitionsByKey[fieldMetadataId]?.isVisible,
        )
        .map((availableColumnDefinition) => {
          const { fieldMetadataId } = availableColumnDefinition;
          const existingBoardField =
            recordIndexFieldDefinitionsByKey[fieldMetadataId];

          return {
            ...(existingBoardField || availableColumnDefinition),
            isVisible: false,
          };
        }),
    [availableColumnDefinitions, recordIndexFieldDefinitionsByKey],
  );

  const handleReorderBoardFields: OnDragEndResponder = useCallback(
    (result) => {
      if (!result.destination) {
        return;
      }

      const reorderedVisibleBoardFields = moveArrayItem(visibleBoardFields, {
        fromIndex: result.source.index - 1,
        toIndex: result.destination.index - 1,
      });

      if (isDeeplyEqual(visibleBoardFields, reorderedVisibleBoardFields))
        return;

      const updatedFields = [...reorderedVisibleBoardFields].map(
        (field, index) => ({ ...field, position: index }),
      );

      setRecordIndexFieldDefinitions(updatedFields);
      saveViewFields(mapBoardFieldDefinitionsToViewFields(updatedFields));
    },
    [saveViewFields, setRecordIndexFieldDefinitions, visibleBoardFields],
  );

  // Todo : this seems over complex and should at least be extracted to an util with unit test.
  // Let's refactor this as we introduce the new viewBar
  const handleBoardFieldVisibilityChange = useCallback(
    async (
      updatedFieldDefinition: Omit<
        ColumnDefinition<FieldMetadata>,
        'size' | 'position'
      >,
    ) => {
      const isNewViewField = !(
        updatedFieldDefinition.fieldMetadataId in
        recordIndexFieldDefinitionsByKey
      );

      let updatedFieldsDefinitions: ColumnDefinition<FieldMetadata>[];

      if (isNewViewField) {
        const correspondingFieldDefinition = availableColumnDefinitions.find(
          (availableColumnDefinition) =>
            availableColumnDefinition.fieldMetadataId ===
            updatedFieldDefinition.fieldMetadataId,
        );

        if (!correspondingFieldDefinition) return;

        const lastVisibleBoardField =
          visibleBoardFields[visibleBoardFields.length - 1];

        updatedFieldsDefinitions = [
          ...recordIndexFieldDefinitions,
          {
            ...correspondingFieldDefinition,
            position: (lastVisibleBoardField?.position || 0) + 1,
            isVisible: true,
          },
        ];
      } else {
        updatedFieldsDefinitions = recordIndexFieldDefinitions.map(
          (existingFieldDefinition) =>
            existingFieldDefinition.fieldMetadataId ===
            updatedFieldDefinition.fieldMetadataId
              ? {
                  ...existingFieldDefinition,
                  isVisible: !existingFieldDefinition.isVisible,
                }
              : existingFieldDefinition,
        );
      }

      setRecordIndexFieldDefinitions(updatedFieldsDefinitions);

      saveViewFields(
        mapBoardFieldDefinitionsToViewFields(updatedFieldsDefinitions),
      );
    },
    [
      recordIndexFieldDefinitionsByKey,
      setRecordIndexFieldDefinitions,
      saveViewFields,
      availableColumnDefinitions,
      visibleBoardFields,
      recordIndexFieldDefinitions,
    ],
  );

  const setAndPersistIsCompactModeActive = useCallback(
    (isCompactModeActive: boolean, view: GraphQLView | undefined) => {
      if (!view) return;
      setIsCompactModeActive(isCompactModeActive);
      updateCurrentView({
        ...view,
        isCompact: isCompactModeActive,
      });
    },
    [setIsCompactModeActive, updateCurrentView],
  );

  return {
    handleReorderBoardFields,
    handleBoardFieldVisibilityChange,
    visibleBoardFields,
    hiddenBoardFields,
    isCompactModeActive,
    setAndPersistIsCompactModeActive,
  };
};
