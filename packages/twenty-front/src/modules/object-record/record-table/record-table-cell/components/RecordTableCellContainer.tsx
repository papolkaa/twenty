import React, {
  ReactElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { clsx } from 'clsx';

import { RecordTableContext } from '@/object-record/record-table/contexts/RecordTableContext';
import { RecordTableRowContext } from '@/object-record/record-table/contexts/RecordTableRowContext';
import { useCurrentTableCellPosition } from '@/object-record/record-table/record-table-cell/hooks/useCurrentCellPosition';
import { HotkeyScope } from '@/ui/utilities/hotkey/types/HotkeyScope';

import { CellHotkeyScopeContext } from '../../contexts/CellHotkeyScopeContext';
import { TableHotkeyScope } from '../../types/TableHotkeyScope';

import { RecordTableCellDisplayMode } from './RecordTableCellDisplayMode';
import { RecordTableCellEditMode } from './RecordTableCellEditMode';
import { RecordTableCellSoftFocusMode } from './RecordTableCellSoftFocusMode';

import styles from './RecordTableCellContainer.module.css';

// const StyledTd = styled.td<{ isSelected: boolean; isInEditMode: boolean }>`
//   background: ${({ isSelected, theme }) =>
//     isSelected ? theme.accent.quaternary : theme.background.primary};
//   z-index: ${({ isInEditMode }) => (isInEditMode ? '4 !important' : '3')};
// `;

// const StyledCellBaseContainer = styled.div<{ softFocus: boolean }>`
//   align-items: center;
//   box-sizing: border-box;
//   cursor: pointer;
//   display: flex;
//   height: 32px;
//   position: relative;
//   user-select: none;
//   ${(props) =>
//     props.softFocus
//       ? `background: ${props.theme.background.transparent.secondary};
//       border-radius: ${props.theme.border.radius.sm};
//       outline: 1px solid ${props.theme.font.color.extraLight};`
//       : ''}
// `;

export type RecordTableCellContainerProps = {
  editModeContent: ReactElement;
  nonEditModeContent: ReactElement;
  editHotkeyScope?: HotkeyScope;
  transparent?: boolean;
  maxContentWidth?: number;
  onSubmit?: () => void;
  onCancel?: () => void;
};

const DEFAULT_CELL_SCOPE: HotkeyScope = {
  scope: TableHotkeyScope.CellEditMode,
};

export const RecordTableCellContainer = ({
  editModeContent,
  nonEditModeContent,
  editHotkeyScope,
}: RecordTableCellContainerProps) => {
  const reference = useRef<HTMLTableCellElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const [hasSoftFocus, setHasSoftFocus] = useState(false);
  const [isInEditMode, setIsInEditMode] = useState(false);

  const { isSelected, recordId } = useContext(RecordTableRowContext);
  const { onContextMenu, onCellMouseEnter } = useContext(RecordTableContext);

  const cellPosition = useCurrentTableCellPosition();

  const handleContextMenu = (event: React.MouseEvent) => {
    onContextMenu(event, recordId);
  };

  const handleContainerMouseEnter = () => {
    if (!hasSoftFocus) {
      onCellMouseEnter({
        cellPosition,
        isHovered,
        setIsHovered,
      });
    }
  };

  const handleContainerMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const customEventListener = (event: any) => {
      const newHasSoftFocus = event.detail;

      setHasSoftFocus(newHasSoftFocus);
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
  }, [cellPosition]);

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
      ref={reference}
      onContextMenu={handleContextMenu}
    >
      <CellHotkeyScopeContext.Provider
        value={editHotkeyScope ?? DEFAULT_CELL_SCOPE}
      >
        <div
          onMouseEnter={handleContainerMouseEnter}
          onMouseLeave={handleContainerMouseLeave}
          onMouseMove={handleContainerMouseEnter}
          className={clsx({
            [styles.cellBaseContainer]: true,
            [styles.cellBaseContainerSoftFocus]: hasSoftFocus,
          })}
        >
          {isInEditMode ? (
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
