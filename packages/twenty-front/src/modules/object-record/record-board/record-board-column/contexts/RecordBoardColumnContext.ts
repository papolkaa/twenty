import { createContext } from 'react';

import { RecordBoardColumnDefinition } from '@/object-record/record-board/types/RecordBoardColumnDefinition';

type RecordBoardColumnContextProps = {
  columnDefinition: RecordBoardColumnDefinition;
  isFirstColumn: boolean;
  isLastColumn: boolean;
  recordCount: number;
  columnId: string;
  recordIds: string[];
};

export const RecordBoardColumnContext =
  createContext<RecordBoardColumnContextProps>(
    {} as RecordBoardColumnContextProps,
  );
