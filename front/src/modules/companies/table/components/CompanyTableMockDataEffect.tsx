import { useEffect } from 'react';

import { companiesAvailableFieldDefinitions } from '@/companies/constants/companiesAvailableFieldDefinitions';
import { useRecordTable } from '@/ui/object/record-table/hooks/useRecordTable';
import { TableRecoilScopeContext } from '@/ui/object/record-table/states/recoil-scope-contexts/TableRecoilScopeContext';
import { tableColumnsScopedState } from '@/ui/object/record-table/states/tableColumnsScopedState';
import { useRecoilScopedState } from '@/ui/utilities/recoil-scope/hooks/useRecoilScopedState';

import { mockedCompaniesData } from './companies-mock-data';

export const CompanyTableMockDataEffect = () => {
  const [, setTableColumns] = useRecoilScopedState(
    tableColumnsScopedState,
    TableRecoilScopeContext,
  );
  const { setRecordTableData } = useRecordTable();

  useEffect(() => {
    setRecordTableData(mockedCompaniesData);
    setTableColumns(companiesAvailableFieldDefinitions);
  }, [setRecordTableData, setTableColumns]);

  return <></>;
};
