import CompanyChip from '@/companies/components/CompanyChip';
import { useRecoilScopedState } from '@/recoil-scope/hooks/useRecoilScopedState';
import { EditableCell } from '@/ui/components/editable-cell/EditableCell';
import { isCreateModeScopedState } from '@/ui/components/editable-cell/states/isCreateModeScopedState';
import { getLogoUrlFromDomainName } from '@/utils/utils';
import { Company, Person } from '~/generated/graphql';

import { PeopleCompanyCreateCell } from './PeopleCompanyCreateCell';
import { PeopleCompanyPicker } from './PeopleCompanyPicker';

export type OwnProps = {
  people: Pick<Person, 'id'> & {
    company?: Pick<Company, 'id' | 'name' | 'domainName'> | null;
  };
};

export function PeopleCompanyCell({ people }: OwnProps) {
  const [isCreating] = useRecoilScopedState(isCreateModeScopedState);

  return (
    <EditableCell
      editModeContent={
        isCreating ? (
          <PeopleCompanyCreateCell people={people} />
        ) : (
          <PeopleCompanyPicker people={people} />
        )
      }
      nonEditModeContent={
        <CompanyChip
          name={people.company?.name ?? ''}
          picture={getLogoUrlFromDomainName(people.company?.domainName)}
        />
      }
    />
  );
}
