import { ReactNode } from 'react';
import { renderHook } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import { FieldContext } from '@/object-record/field/contexts/FieldContext';
import { useGetButtonIcon } from '@/object-record/field/hooks/useGetButtonIcon';
import { FieldDefinition } from '@/object-record/field/types/FieldDefinition';
import {
  FieldMetadata,
  FieldPhoneMetadata,
  FieldRelationMetadata,
} from '@/object-record/field/types/FieldMetadata';
import { IconPencil } from '@/ui/display/icon';

const fieldMetadataId = 'fieldMetadataId';
const entityId = 'entityId';

const phoneFieldDefinition: FieldDefinition<FieldPhoneMetadata> = {
  fieldMetadataId,
  label: 'Contact',
  iconName: 'Phone',
  type: 'TEXT',
  metadata: {
    objectMetadataNameSingular: 'person',
    placeHolder: '(+256)-712-345-6789',
    fieldName: 'phone',
  },
};

const relationFieldDefinition: FieldDefinition<FieldRelationMetadata> = {
  fieldMetadataId,
  label: 'Contact',
  iconName: 'Phone',
  type: 'RELATION',
  metadata: {
    fieldName: 'contact',
    relationFieldMetadataId: 'relationFieldMetadataId',
    relationObjectMetadataNamePlural: 'users',
    relationObjectMetadataNameSingular: 'user',
  },
};

const getWrapper =
  (fieldDefinition: FieldDefinition<FieldMetadata>) =>
  ({ children }: { children: ReactNode }) => (
    <FieldContext.Provider
      value={{
        fieldDefinition,
        entityId,
        hotkeyScope: 'hotkeyScope',
        isLabelIdentifier: false,
      }}
    >
      <RecoilRoot>{children}</RecoilRoot>
    </FieldContext.Provider>
  );

const PhoneWrapper = getWrapper(phoneFieldDefinition);
const RelationWrapper = getWrapper(relationFieldDefinition);

describe('useGetButtonIcon', () => {
  it('should return undefined', () => {
    const { result } = renderHook(() => useGetButtonIcon());
    expect(result.current).toBeUndefined();
  });

  it('should return icon pencil', () => {
    const { result } = renderHook(() => useGetButtonIcon(), {
      wrapper: PhoneWrapper,
    });
    expect(result.current).toEqual(IconPencil);
  });

  it('should return iconPencil for relation field', () => {
    const { result } = renderHook(() => useGetButtonIcon(), {
      wrapper: RelationWrapper,
    });
    expect(result.current).toEqual(IconPencil);
  });
});
