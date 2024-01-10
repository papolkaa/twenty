import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { useRecordTableStates } from '@/object-record/record-table/hooks/internal/useRecordTableStates';
import { useRecordTable } from '@/object-record/record-table/hooks/useRecordTable';

import { useMoveEditModeToTableCellPosition } from '../../hooks/internal/useMoveEditModeToCellPosition';

import { useCurrentTableCellPosition } from './useCurrentCellPosition';

export const useCurrentTableCellEditMode = () => {
  const { scopeId } = useRecordTable();

  const moveEditModeToTableCellPosition =
    useMoveEditModeToTableCellPosition(scopeId);

  const currentTableCellPosition = useCurrentTableCellPosition();

  const { isTableCellInEditModeFamilyState } = useRecordTableStates();

  const [isCurrentTableCellInEditMode] = useRecoilState(
    isTableCellInEditModeFamilyState(currentTableCellPosition),
  );

  const setCurrentTableCellInEditMode = useCallback(() => {
    moveEditModeToTableCellPosition(currentTableCellPosition);
  }, [currentTableCellPosition, moveEditModeToTableCellPosition]);

  return {
    isCurrentTableCellInEditMode,
    setCurrentTableCellInEditMode,
  };
};
