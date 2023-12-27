import { createScopedState } from '@/ui/utilities/recoil-scope/utils/createScopedState';

import { TableCellPosition } from '../types/TableCellPosition';

export const currentTableCellInEditModePositionState =
  createScopedState<TableCellPosition>({
    key: 'currentTableCellInEditModePositionState',
    defaultValue: {
      row: 0,
      column: 1,
    },
  });
