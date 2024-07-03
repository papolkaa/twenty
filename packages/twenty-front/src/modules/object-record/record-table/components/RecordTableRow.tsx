import { RecordTableCellCheckbox } from '@/object-record/record-table/components/RecordTableCellCheckbox';
import { RecordTableCellGrip } from '@/object-record/record-table/components/RecordTableCellGrip';
import { RecordTableCells } from '@/object-record/record-table/components/RecordTableCells';
import { RecordTableLastEmptyCell } from '@/object-record/record-table/components/RecordTableLastEmptyCell';
import { RecordTableRowWrapper } from '@/object-record/record-table/components/RecordTableRowWrapper';

type RecordTableRowProps = {
  recordId: string;
  rowIndex: number;
  isPendingRow?: boolean;
};

export const RecordTableRow = ({
  recordId,
  rowIndex,
  isPendingRow,
}: RecordTableRowProps) => {
  return (
    <RecordTableRowWrapper
      recordId={recordId}
      rowIndex={rowIndex}
      isPendingRow={isPendingRow}
    >
      <RecordTableCellGrip />
      <RecordTableCellCheckbox />
      <RecordTableCells />
      <RecordTableLastEmptyCell />
    </RecordTableRowWrapper>
  );
};
