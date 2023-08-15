import { useState } from 'react';

import { FieldRecoilScopeContext } from '@/ui/editable-field/states/recoil-scope-contexts/FieldRecoilScopeContext';
import { DoubleTextInputEdit } from '@/ui/input/double-text/components/DoubleTextInputEdit';
import { RecoilScope } from '@/ui/utilities/recoil-scope/components/RecoilScope';
import { Person, useUpdateOnePersonMutation } from '~/generated/graphql';

type OwnProps = {
  people: Pick<Person, 'id' | 'firstName' | 'lastName'>;
};

export function PeopleFullNameEditableField({ people }: OwnProps) {
  const [internalValueFirstName, setInternalValueFirstName] = useState(
    people.firstName,
  );
  const [internalValueLastName, setInternalValueLastName] = useState(
    people.lastName,
  );

  const [updatePeople] = useUpdateOnePersonMutation();

  async function handleChange(
    newValueFirstName: string,
    newValueLastName: string,
  ) {
    setInternalValueFirstName(newValueFirstName);
    setInternalValueLastName(newValueLastName);
    handleSubmit(newValueFirstName, newValueLastName);
  }

  async function handleSubmit(
    newValueFirstName: string,
    newValueLastName: string,
  ) {
    await updatePeople({
      variables: {
        where: {
          id: people.id,
        },
        data: {
          firstName: newValueFirstName ?? '',
          lastName: newValueLastName ?? '',
        },
      },
    });
  }

  return (
    <RecoilScope SpecificContext={FieldRecoilScopeContext}>
      <DoubleTextInputEdit
        firstValuePlaceholder={'F​irst n​ame'} // Hack: Fake character to prevent password-manager from filling the field
        secondValuePlaceholder={'L​ast n​ame'} // Hack: Fake character to prevent password-manager from filling the field
        firstValue={internalValueFirstName ?? ''}
        secondValue={internalValueLastName ?? ''}
        onChange={handleChange}
      />
    </RecoilScope>
  );
}
