import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { Checkbox } from 'twenty-ui';

import { useRecordTableStates } from '@/object-record/record-table/hooks/internal/useRecordTableStates';

import { useRecordTable } from '../hooks/useRecordTable';

const StyledContainer = styled.div`
  align-items: center;

  display: flex;
  height: 32px;

  justify-content: center;
  background-color: ${({ theme }) => theme.background.primary};
`;

export const SelectAllCheckbox = () => {
  const { allRowsSelectedStatusSelector } = useRecordTableStates();

  const allRowsSelectedStatus = useRecoilValue(allRowsSelectedStatusSelector());
  const { selectAllRows } = useRecordTable();

  const checked = allRowsSelectedStatus === 'all';
  const indeterminate = allRowsSelectedStatus === 'some';

  const onChange = () => {
    selectAllRows();
  };

  return (
    <StyledContainer>
      <Checkbox
        checked={checked}
        onChange={onChange}
        indeterminate={indeterminate}
      />
    </StyledContainer>
  );
};
