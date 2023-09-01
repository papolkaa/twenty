import { useEffect } from 'react';

import { useSetEntityTableData } from '@/ui/table/hooks/useSetEntityTableData';
import { TableRecoilScopeContext } from '@/ui/table/states/recoil-scope-contexts/TableRecoilScopeContext';
import { tableColumnsScopedState } from '@/ui/table/states/tableColumnsScopedState';
import { useRecoilScopedState } from '@/ui/utilities/recoil-scope/hooks/useRecoilScopedState';

import { companiesAvailableColumnDefinitions } from '../../constants/companiesAvailableColumnDefinitions';

import { mockedCompaniesData } from './companies-mock-data';

export function CompanyTableMockData() {
  const [, setColumns] = useRecoilScopedState(
    tableColumnsScopedState,
    TableRecoilScopeContext,
  );
  const setEntityTableData = useSetEntityTableData();

  useEffect(() => {
    setEntityTableData(mockedCompaniesData, []);

    setColumns(companiesAvailableColumnDefinitions);
  }, [setColumns, setEntityTableData]);

  return <></>;
}
