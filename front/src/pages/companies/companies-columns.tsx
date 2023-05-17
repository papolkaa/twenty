import { useMemo } from 'react';
import {
  FaRegBuilding,
  FaCalendar,
  FaLink,
  FaMapPin,
  FaRegUser,
  FaUsers,
} from 'react-icons/fa';
import { CellContext, createColumnHelper } from '@tanstack/react-table';

import { SEARCH_USER_QUERY } from '../../services/api/search/search';
import { SearchConfigType } from '../../interfaces/search/interface';

import { Company } from '../../interfaces/entities/company.interface';
import { updateCompany } from '../../services/api/companies';
import { User, mapToUser } from '../../interfaces/entities/user.interface';

import ColumnHead from '../../components/table/ColumnHead';
import Checkbox from '../../components/form/Checkbox';
import { SelectAllCheckbox } from '../../components/table/SelectAllCheckbox';
import EditableDate from '../../components/editable-cell/EditableDate';
import EditableRelation from '../../components/editable-cell/EditableRelation';
import EditableChip from '../../components/editable-cell/EditableChip';
import EditableText from '../../components/editable-cell/EditableText';
import PersonChip, {
  PersonChipPropsType,
} from '../../components/chips/PersonChip';
import CompanyChip from '../../components/chips/CompanyChip';

const columnHelper = createColumnHelper<Company>();

export const useCompaniesColumns = () => {
  return useMemo(() => {
    return [
      {
        id: 'select',
        header: ({ table }: any) => (
          <SelectAllCheckbox
            checked={table.getIsAllRowsSelected()}
            indeterminate={table.getIsSomeRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
          />
        ),
        cell: (props: CellContext<Company, string>) => (
          <Checkbox
            id={`company-selected-${props.row.original.id}`}
            name={`company-selected-${props.row.original.id}`}
            checked={props.row.getIsSelected()}
            onChange={props.row.getToggleSelectedHandler()}
          />
        ),
      },
      columnHelper.accessor('name', {
        header: () => (
          <ColumnHead viewName="Name" viewIcon={<FaRegBuilding />} />
        ),
        cell: (props) => (
          <EditableChip
            value={props.row.original.name || ''}
            placeholder="Name"
            picture={`https://www.google.com/s2/favicons?domain=${props.row.original.domainName}&sz=256`}
            changeHandler={(value: string) => {
              const company = props.row.original;
              company.name = value;
              updateCompany(company);
            }}
            chipClickHandler={(editing) => {
              const company = props.row.original;
              company.name = undefined;
              updateCompany(company);
            }}
            ChipComponent={CompanyChip}
          />
        ),
      }),
      columnHelper.accessor('employees', {
        header: () => (
          <ColumnHead viewName="Employees" viewIcon={<FaUsers />} />
        ),
        cell: (props) => (
          <EditableText
            content={props.row.original.employees || ''}
            changeHandler={(value) => {
              const company = props.row.original;
              company.employees = value;
              updateCompany(company);
            }}
          />
        ),
      }),
      columnHelper.accessor('domainName', {
        header: () => <ColumnHead viewName="URL" viewIcon={<FaLink />} />,
        cell: (props) => (
          <EditableText
            content={props.row.original.domainName || ''}
            changeHandler={(value) => {
              const company = props.row.original;
              company.domainName = value;
              updateCompany(company);
            }}
          />
        ),
      }),
      columnHelper.accessor('address', {
        header: () => <ColumnHead viewName="Address" viewIcon={<FaMapPin />} />,
        cell: (props) => (
          <EditableText
            content={props.row.original.address || ''}
            changeHandler={(value) => {
              const company = props.row.original;
              company.address = value;
              updateCompany(company);
            }}
          />
        ),
      }),
      columnHelper.accessor('creationDate', {
        header: () => (
          <ColumnHead viewName="Creation" viewIcon={<FaCalendar />} />
        ),
        cell: (props) => (
          <EditableDate
            value={props.row.original.creationDate || new Date()}
            changeHandler={(value: Date) => {
              const company = props.row.original;
              company.creationDate = value;
              updateCompany(company);
            }}
          />
        ),
      }),
      columnHelper.accessor('accountOwner', {
        header: () => (
          <ColumnHead viewName="Account Owner" viewIcon={<FaRegUser />} />
        ),
        cell: (props) => (
          <EditableRelation<User, PersonChipPropsType>
            relation={props.row.original.accountOwner}
            searchPlaceholder="Account Owner"
            ChipComponent={PersonChip}
            chipComponentPropsMapper={(
              accountOwner: User,
            ): PersonChipPropsType => {
              return {
                name: accountOwner.displayName || '',
              };
            }}
            changeHandler={(relation: User | null) => {
              const company = props.row.original;
              if (!relation) {
                company.accountOwner = null;
                return;
              }
              if (company.accountOwner) {
                company.accountOwner.id = relation.id;
              } else {
                company.accountOwner = {
                  __typename: 'users',
                  id: relation.id,
                  email: relation.email,
                  displayName: relation.displayName,
                };
              }
              updateCompany(company);
            }}
            searchConfig={
              {
                query: SEARCH_USER_QUERY,
                template: (searchInput: string) => ({
                  displayName: { _ilike: `%${searchInput}%` },
                }),
                resultMapper: (accountOwner) => ({
                  render: (accountOwner) => accountOwner.displayName,
                  value: mapToUser(accountOwner),
                }),
              } satisfies SearchConfigType<User>
            }
          />
        ),
      }),
    ];
  }, []);
};
