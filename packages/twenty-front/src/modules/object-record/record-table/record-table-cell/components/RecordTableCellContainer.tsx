import React, { ReactElement, useContext, useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { clsx } from 'clsx';
import { useRecoilValue } from 'recoil';

import { FieldContext } from '@/object-record/record-field/contexts/FieldContext';
import { useFieldFocus } from '@/object-record/record-field/hooks/useFieldFocus';
import { RecordTableContext } from '@/object-record/record-table/contexts/RecordTableContext';
import { RecordTableRowContext } from '@/object-record/record-table/contexts/RecordTableRowContext';
import { useRecordTableStates } from '@/object-record/record-table/hooks/internal/useRecordTableStates';
import { RecordTableCellSoftFocusMode } from '@/object-record/record-table/record-table-cell/components/RecordTableCellSoftFocusMode';
import { useCurrentTableCellPosition } from '@/object-record/record-table/record-table-cell/hooks/useCurrentCellPosition';
import { useOpenRecordTableCellFromCell } from '@/object-record/record-table/record-table-cell/hooks/useOpenRecordTableCellFromCell';
import { HotkeyScope } from '@/ui/utilities/hotkey/types/HotkeyScope';

import { CellHotkeyScopeContext } from '../../contexts/CellHotkeyScopeContext';
import { TableHotkeyScope } from '../../types/TableHotkeyScope';

import { RecordTableCellDisplayMode } from './RecordTableCellDisplayMode';
import { RecordTableCellEditMode } from './RecordTableCellEditMode';

import styles from './RecordTableCellContainer.module.css';

const StyledSkeletonContainer = styled.div`
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(1)};
`;

const StyledRecordTableCellContainerLoader = ({
  skeletonWidth = 132,
}: {
  skeletonWidth?: number;
}) => {
  const theme = useTheme();
  return (
    <SkeletonTheme
      baseColor={theme.background.tertiary}
      highlightColor={theme.background.transparent.lighter}
      borderRadius={4}
    >
      <Skeleton width={skeletonWidth} height={16} />
    </SkeletonTheme>
  );
};

export type RecordTableCellContainerProps = {
  editModeContent: ReactElement;
  nonEditModeContent: ReactElement;
  editHotkeyScope?: HotkeyScope;
  transparent?: boolean;
  maxContentWidth?: number;
  onSubmit?: () => void;
  onCancel?: () => void;
  skeletonWidth?: number;
};

const DEFAULT_CELL_SCOPE: HotkeyScope = {
  scope: TableHotkeyScope.CellEditMode,
};

export const RecordTableCellContainer = ({
  editModeContent,
  nonEditModeContent,
  editHotkeyScope,
  skeletonWidth,
}: RecordTableCellContainerProps) => {
  const { setIsFocused } = useFieldFocus();
  const { openTableCell } = useOpenRecordTableCellFromCell();
  const { isRecordTableInitialLoadingState } = useRecordTableStates();

  const { isSelected, recordId, isPendingRow } = useContext(
    RecordTableRowContext,
  );
  const { isLabelIdentifier } = useContext(FieldContext);
  const { onContextMenu, onCellMouseEnter } = useContext(RecordTableContext);

  const shouldBeInitiallyInEditMode =
    isPendingRow === true && isLabelIdentifier;

  const [hasSoftFocus, setHasSoftFocus] = useState(false);
  const [isInEditMode, setIsInEditMode] = useState(shouldBeInitiallyInEditMode);

  const cellPosition = useCurrentTableCellPosition();
  const isRecordTableInitialLoading = useRecoilValue(
    isRecordTableInitialLoadingState,
  );
  const handleContextMenu = (event: React.MouseEvent) => {
    onContextMenu(event, recordId);
  };

  const handleContainerMouseMove = () => {
    if (!hasSoftFocus) {
      onCellMouseEnter({
        cellPosition,
      });
    }
  };

  const handleContainerMouseEnter = () => {
    if (!hasSoftFocus) {
      onCellMouseEnter({
        cellPosition,
      });
    }
  };

  const handleContainerMouseLeave = () => {
    setHasSoftFocus(false);
    setIsFocused(false);
  };

  const handleContainerClick = () => {
    if (!hasSoftFocus) {
      openTableCell();
    }
  };

  useEffect(() => {
    const customEventListener = (event: any) => {
      event.stopPropagation();

      const newHasSoftFocus = event.detail;

      setHasSoftFocus(newHasSoftFocus);
      setIsFocused(newHasSoftFocus);
    };

    document.addEventListener(
      `soft-focus-move-${cellPosition.row}:${cellPosition.column}`,
      customEventListener,
    );

    return () => {
      document.removeEventListener(
        `soft-focus-move-${cellPosition.row}:${cellPosition.column}`,
        customEventListener,
      );
    };
  }, [cellPosition, setIsFocused]);

  useEffect(() => {
    const customEventListener = (event: any) => {
      const newIsInEditMode = event.detail;

      setIsInEditMode(newIsInEditMode);
    };

    document.addEventListener(
      `edit-mode-change-${cellPosition.row}:${cellPosition.column}`,
      customEventListener,
    );

    return () => {
      document.removeEventListener(
        `edit-mode-change-${cellPosition.row}:${cellPosition.column}`,
        customEventListener,
      );
    };
  }, [cellPosition]);

  return (
    <td
      className={clsx({
        [styles.tdInEditMode]: isInEditMode,
        [styles.tdNotInEditMode]: !isInEditMode,
        [styles.tdIsSelected]: isSelected,
        [styles.tdIsNotSelected]: !isSelected,
      })}
      onContextMenu={handleContextMenu}
    >
      <CellHotkeyScopeContext.Provider
        value={editHotkeyScope ?? DEFAULT_CELL_SCOPE}
      >
        <div
          onMouseEnter={handleContainerMouseEnter}
          onMouseLeave={handleContainerMouseLeave}
          onMouseMove={handleContainerMouseMove}
          onClick={handleContainerClick}
          className={clsx({
            [styles.cellBaseContainer]: true,
            [styles.cellBaseContainerSoftFocus]: hasSoftFocus,
          })}
        >
          {isRecordTableInitialLoading ? (
            <StyledSkeletonContainer>
              <StyledRecordTableCellContainerLoader
                skeletonWidth={skeletonWidth}
              />
            </StyledSkeletonContainer>
          ) : isInEditMode ? (
            <RecordTableCellEditMode>{editModeContent}</RecordTableCellEditMode>
          ) : hasSoftFocus ? (
            <>
              <RecordTableCellSoftFocusMode
                editModeContent={editModeContent}
                nonEditModeContent={nonEditModeContent}
              />
            </>
          ) : (
            <RecordTableCellDisplayMode>
              {nonEditModeContent}
            </RecordTableCellDisplayMode>
          )}
        </div>
      </CellHotkeyScopeContext.Provider>
    </td>
  );
};
