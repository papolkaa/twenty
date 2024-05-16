import { useEffect } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useSetRecoilState } from 'recoil';
import { ComponentDecorator } from 'twenty-ui';

import { getBasePathToShowPage } from '@/object-metadata/utils/getBasePathToShowPage';
import { FieldContext } from '@/object-record/record-field/contexts/FieldContext';
import {
  RecordFieldValueSelectorContextProvider,
  useSetRecordValue,
} from '@/object-record/record-index/contexts/RecordFieldValueSelectorContext';
import { recordStoreFamilyState } from '@/object-record/record-store/states/recordStoreFamilyState';
import { RecordTableCellFieldContextWrapper } from '@/object-record/record-table/components/RecordTableCellFieldContextWrapper';
import { RecordTableCellContext } from '@/object-record/record-table/contexts/RecordTableCellContext';
import { RecordTableContext } from '@/object-record/record-table/contexts/RecordTableContext';
import { RecordTableRowContext } from '@/object-record/record-table/contexts/RecordTableRowContext';
import { RecordTableScope } from '@/object-record/record-table/scopes/RecordTableScope';
import { FieldMetadataType } from '~/generated/graphql';
import { MemoryRouterDecorator } from '~/testing/decorators/MemoryRouterDecorator';
import { getProfilingStory } from '~/testing/profiling/utils/getProfilingStory';

const mock = {
  objectMetadataItem: {
    __typename: 'object',
    id: '4916628e-8570-4242-8970-f58c509e5a93',
    dataSourceId: '0fd9fd54-0e8d-4f78-911c-76b33436a768',
    nameSingular: 'person',
    namePlural: 'people',
    labelSingular: 'Person',
    labelPlural: 'People',
    description: 'A person',
    icon: 'IconUser',
    isCustom: false,
    isRemote: false,
    isActive: true,
    isSystem: false,
    createdAt: '2024-05-16T10:54:27.788Z',
    updatedAt: '2024-05-16T10:54:27.788Z',
    labelIdentifierFieldMetadataId: null,
    imageIdentifierFieldMetadataId: null,
    fields: [
      {
        __typename: 'field',
        id: '9058056e-36b3-4a3f-9037-f0bca9744296',
        type: 'RELATION',
        name: 'company',
        label: 'Company',
        description: 'Contact’s company',
        icon: 'IconBuildingSkyscraper',
        isCustom: false,
        isActive: true,
        isSystem: false,
        isNullable: true,
        createdAt: '2024-05-16T10:54:27.788Z',
        updatedAt: '2024-05-16T10:54:27.788Z',
        fromRelationMetadata: null,
        toRelationMetadata: {
          __typename: 'relation',
          id: '0cf72416-3d94-4d94-abf3-7dc9d734435b',
          relationType: 'ONE_TO_MANY',
          fromObjectMetadata: {
            __typename: 'object',
            id: '79c2d29c-76f6-432f-91c9-df1259b73d95',
            dataSourceId: '0fd9fd54-0e8d-4f78-911c-76b33436a768',
            nameSingular: 'company',
            namePlural: 'companies',
            isSystem: false,
            isRemote: false,
          },
          fromFieldMetadataId: '7b281010-5f47-4771-b3f5-f4bcd24ed1b5',
        },
        defaultValue: null,
        options: null,
        relationDefinition: {
          __typename: 'RelationDefinition',
          relationId: '0cf72416-3d94-4d94-abf3-7dc9d734435b',
          direction: 'MANY_TO_ONE',
          sourceObjectMetadata: {
            __typename: 'object',
            id: '4916628e-8570-4242-8970-f58c509e5a93',
            nameSingular: 'person',
            namePlural: 'people',
          },
          sourceFieldMetadata: {
            __typename: 'field',
            id: '9058056e-36b3-4a3f-9037-f0bca9744296',
            name: 'company',
          },
          targetObjectMetadata: {
            __typename: 'object',
            id: '79c2d29c-76f6-432f-91c9-df1259b73d95',
            nameSingular: 'company',
            namePlural: 'companies',
          },
          targetFieldMetadata: {
            __typename: 'field',
            id: '7b281010-5f47-4771-b3f5-f4bcd24ed1b5',
            name: 'people',
          },
        },
      },
      {
        __typename: 'field',
        id: 'bd504d22-ecae-4228-8729-5c770a174336',
        type: 'TEXT',
        name: 'avatarUrl',
        label: 'Avatar',
        description: 'Contact’s avatar',
        icon: 'IconFileUpload',
        isCustom: false,
        isActive: true,
        isSystem: true,
        isNullable: false,
        createdAt: '2024-05-16T10:54:27.788Z',
        updatedAt: '2024-05-16T10:54:27.788Z',
        fromRelationMetadata: null,
        toRelationMetadata: null,
        defaultValue: "''",
        options: null,
        relationDefinition: null,
      },
      {
        __typename: 'field',
        id: '21238919-5d92-402e-8124-367948ef86e6',
        type: 'TEXT',
        name: 'city',
        label: 'City',
        description: 'Contact’s city',
        icon: 'IconMap',
        isCustom: false,
        isActive: true,
        isSystem: false,
        isNullable: false,
        createdAt: '2024-05-16T10:54:27.788Z',
        updatedAt: '2024-05-16T10:54:27.788Z',
        fromRelationMetadata: null,
        toRelationMetadata: null,
        defaultValue: "''",
        options: null,
        relationDefinition: null,
      },
      {
        __typename: 'field',
        id: '78edf4bb-c6a6-449e-b9db-20a575b97d5e',
        type: 'RELATION',
        name: 'activityTargets',
        label: 'Activities',
        description: 'Activities tied to the contact',
        icon: 'IconCheckbox',
        isCustom: false,
        isActive: true,
        isSystem: false,
        isNullable: true,
        createdAt: '2024-05-16T10:54:27.788Z',
        updatedAt: '2024-05-16T10:54:27.788Z',
        fromRelationMetadata: {
          __typename: 'relation',
          id: 'd76f949d-023d-4b45-a71e-f39e3b1562ba',
          relationType: 'ONE_TO_MANY',
          toObjectMetadata: {
            __typename: 'object',
            id: '82222ca2-dd40-44ec-b8c5-eb0eca9ec625',
            dataSourceId: '0fd9fd54-0e8d-4f78-911c-76b33436a768',
            nameSingular: 'activityTarget',
            namePlural: 'activityTargets',
            isSystem: true,
            isRemote: false,
          },
          toFieldMetadataId: 'f5f515cc-6d8a-44c3-b2d4-f04b9868a9c5',
        },
        toRelationMetadata: null,
        defaultValue: null,
        options: null,
        relationDefinition: {
          __typename: 'RelationDefinition',
          relationId: 'd76f949d-023d-4b45-a71e-f39e3b1562ba',
          direction: 'ONE_TO_MANY',
          sourceObjectMetadata: {
            __typename: 'object',
            id: '4916628e-8570-4242-8970-f58c509e5a93',
            nameSingular: 'person',
            namePlural: 'people',
          },
          sourceFieldMetadata: {
            __typename: 'field',
            id: '78edf4bb-c6a6-449e-b9db-20a575b97d5e',
            name: 'activityTargets',
          },
          targetObjectMetadata: {
            __typename: 'object',
            id: '82222ca2-dd40-44ec-b8c5-eb0eca9ec625',
            nameSingular: 'activityTarget',
            namePlural: 'activityTargets',
          },
          targetFieldMetadata: {
            __typename: 'field',
            id: 'f5f515cc-6d8a-44c3-b2d4-f04b9868a9c5',
            name: 'person',
          },
        },
      },
      {
        __typename: 'field',
        id: '4128b168-1439-441e-bb6a-223fa1276642',
        type: 'RELATION',
        name: 'pointOfContactForOpportunities',
        label: 'POC for Opportunities',
        description: 'Point of Contact for Opportunities',
        icon: 'IconTargetArrow',
        isCustom: false,
        isActive: true,
        isSystem: false,
        isNullable: true,
        createdAt: '2024-05-16T10:54:27.788Z',
        updatedAt: '2024-05-16T10:54:27.788Z',
        fromRelationMetadata: {
          __typename: 'relation',
          id: 'a5a61d23-8ac9-4014-9441-ec3a1781a661',
          relationType: 'ONE_TO_MANY',
          toObjectMetadata: {
            __typename: 'object',
            id: '494b9b7c-a44e-4d52-b274-cdfb0e322165',
            dataSourceId: '0fd9fd54-0e8d-4f78-911c-76b33436a768',
            nameSingular: 'opportunity',
            namePlural: 'opportunities',
            isSystem: false,
            isRemote: false,
          },
          toFieldMetadataId: '86559a6f-6afc-4d5c-9bed-fc74d063791b',
        },
        toRelationMetadata: null,
        defaultValue: null,
        options: null,
        relationDefinition: {
          __typename: 'RelationDefinition',
          relationId: 'a5a61d23-8ac9-4014-9441-ec3a1781a661',
          direction: 'ONE_TO_MANY',
          sourceObjectMetadata: {
            __typename: 'object',
            id: '4916628e-8570-4242-8970-f58c509e5a93',
            nameSingular: 'person',
            namePlural: 'people',
          },
          sourceFieldMetadata: {
            __typename: 'field',
            id: '4128b168-1439-441e-bb6a-223fa1276642',
            name: 'pointOfContactForOpportunities',
          },
          targetObjectMetadata: {
            __typename: 'object',
            id: '494b9b7c-a44e-4d52-b274-cdfb0e322165',
            nameSingular: 'opportunity',
            namePlural: 'opportunities',
          },
          targetFieldMetadata: {
            __typename: 'field',
            id: '86559a6f-6afc-4d5c-9bed-fc74d063791b',
            name: 'pointOfContact',
          },
        },
      },
      {
        __typename: 'field',
        id: '3db3a6ac-a960-42bd-8375-59ab6c4837d6',
        type: 'RELATION',
        name: 'calendarEventParticipants',
        label: 'Calendar Event Participants',
        description: 'Calendar Event Participants',
        icon: 'IconCalendar',
        isCustom: false,
        isActive: true,
        isSystem: true,
        isNullable: true,
        createdAt: '2024-05-16T10:54:27.788Z',
        updatedAt: '2024-05-16T10:54:27.788Z',
        fromRelationMetadata: {
          __typename: 'relation',
          id: '456f7875-b48c-4795-a0c7-a69d7339afee',
          relationType: 'ONE_TO_MANY',
          toObjectMetadata: {
            __typename: 'object',
            id: 'eba13fca-57b7-470c-8c23-a0e640e04ffb',
            dataSourceId: '0fd9fd54-0e8d-4f78-911c-76b33436a768',
            nameSingular: 'calendarEventParticipant',
            namePlural: 'calendarEventParticipants',
            isSystem: true,
            isRemote: false,
          },
          toFieldMetadataId: 'c1cdebda-b514-4487-9b9c-aa59d8fca8eb',
        },
        toRelationMetadata: null,
        defaultValue: null,
        options: null,
        relationDefinition: {
          __typename: 'RelationDefinition',
          relationId: '456f7875-b48c-4795-a0c7-a69d7339afee',
          direction: 'ONE_TO_MANY',
          sourceObjectMetadata: {
            __typename: 'object',
            id: '4916628e-8570-4242-8970-f58c509e5a93',
            nameSingular: 'person',
            namePlural: 'people',
          },
          sourceFieldMetadata: {
            __typename: 'field',
            id: '3db3a6ac-a960-42bd-8375-59ab6c4837d6',
            name: 'calendarEventParticipants',
          },
          targetObjectMetadata: {
            __typename: 'object',
            id: 'eba13fca-57b7-470c-8c23-a0e640e04ffb',
            nameSingular: 'calendarEventParticipant',
            namePlural: 'calendarEventParticipants',
          },
          targetFieldMetadata: {
            __typename: 'field',
            id: 'c1cdebda-b514-4487-9b9c-aa59d8fca8eb',
            name: 'person',
          },
        },
      },
      {
        __typename: 'field',
        id: 'f0a290ac-fa74-48da-a77f-db221cb0206a',
        type: 'DATE_TIME',
        name: 'createdAt',
        label: 'Creation date',
        description: 'Creation date',
        icon: 'IconCalendar',
        isCustom: false,
        isActive: true,
        isSystem: false,
        isNullable: false,
        createdAt: '2024-05-16T10:54:27.788Z',
        updatedAt: '2024-05-16T10:54:27.788Z',
        fromRelationMetadata: null,
        toRelationMetadata: null,
        defaultValue: 'now',
        options: null,
        relationDefinition: null,
      },
      {
        __typename: 'field',
        id: 'b96e0e45-278c-44b6-a601-30ba24592dd6',
        type: 'RELATION',
        name: 'favorites',
        label: 'Favorites',
        description: 'Favorites linked to the contact',
        icon: 'IconHeart',
        isCustom: false,
        isActive: true,
        isSystem: true,
        isNullable: true,
        createdAt: '2024-05-16T10:54:27.788Z',
        updatedAt: '2024-05-16T10:54:27.788Z',
        fromRelationMetadata: {
          __typename: 'relation',
          id: '31542774-fb15-4d01-b00b-8fc94887f458',
          relationType: 'ONE_TO_MANY',
          toObjectMetadata: {
            __typename: 'object',
            id: 'f08422e2-14cd-4966-9cd3-bce0302cc56f',
            dataSourceId: '0fd9fd54-0e8d-4f78-911c-76b33436a768',
            nameSingular: 'favorite',
            namePlural: 'favorites',
            isSystem: true,
            isRemote: false,
          },
          toFieldMetadataId: '67d28b17-ff3c-49b4-a6da-1354be9634b0',
        },
        toRelationMetadata: null,
        defaultValue: null,
        options: null,
        relationDefinition: {
          __typename: 'RelationDefinition',
          relationId: '31542774-fb15-4d01-b00b-8fc94887f458',
          direction: 'ONE_TO_MANY',
          sourceObjectMetadata: {
            __typename: 'object',
            id: '4916628e-8570-4242-8970-f58c509e5a93',
            nameSingular: 'person',
            namePlural: 'people',
          },
          sourceFieldMetadata: {
            __typename: 'field',
            id: 'b96e0e45-278c-44b6-a601-30ba24592dd6',
            name: 'favorites',
          },
          targetObjectMetadata: {
            __typename: 'object',
            id: 'f08422e2-14cd-4966-9cd3-bce0302cc56f',
            nameSingular: 'favorite',
            namePlural: 'favorites',
          },
          targetFieldMetadata: {
            __typename: 'field',
            id: '67d28b17-ff3c-49b4-a6da-1354be9634b0',
            name: 'person',
          },
        },
      },
      {
        __typename: 'field',
        id: '430af81e-2a8c-4ce2-9969-c0f0e91818bb',
        type: 'LINK',
        name: 'linkedinLink',
        label: 'Linkedin',
        description: 'Contact’s Linkedin account',
        icon: 'IconBrandLinkedin',
        isCustom: false,
        isActive: true,
        isSystem: false,
        isNullable: true,
        createdAt: '2024-05-16T10:54:27.788Z',
        updatedAt: '2024-05-16T10:54:27.788Z',
        fromRelationMetadata: null,
        toRelationMetadata: null,
        defaultValue: {
          url: "''",
          label: "''",
        },
        options: null,
        relationDefinition: null,
      },
      {
        __typename: 'field',
        id: 'c885c3d9-63e2-4c0d-b7d6-ee9e867eb1f6',
        type: 'RELATION',
        name: 'attachments',
        label: 'Attachments',
        description: 'Attachments linked to the contact.',
        icon: 'IconFileImport',
        isCustom: false,
        isActive: true,
        isSystem: false,
        isNullable: true,
        createdAt: '2024-05-16T10:54:27.788Z',
        updatedAt: '2024-05-16T10:54:27.788Z',
        fromRelationMetadata: {
          __typename: 'relation',
          id: 'c0cc3456-afa4-46e0-820d-2db0b63a8273',
          relationType: 'ONE_TO_MANY',
          toObjectMetadata: {
            __typename: 'object',
            id: '0e3c9a9d-8a60-4671-a466-7b840a422da2',
            dataSourceId: '0fd9fd54-0e8d-4f78-911c-76b33436a768',
            nameSingular: 'attachment',
            namePlural: 'attachments',
            isSystem: true,
            isRemote: false,
          },
          toFieldMetadataId: 'a920a0d6-8e71-4ab8-90b9-ab540e04732a',
        },
        toRelationMetadata: null,
        defaultValue: null,
        options: null,
        relationDefinition: {
          __typename: 'RelationDefinition',
          relationId: 'c0cc3456-afa4-46e0-820d-2db0b63a8273',
          direction: 'ONE_TO_MANY',
          sourceObjectMetadata: {
            __typename: 'object',
            id: '4916628e-8570-4242-8970-f58c509e5a93',
            nameSingular: 'person',
            namePlural: 'people',
          },
          sourceFieldMetadata: {
            __typename: 'field',
            id: 'c885c3d9-63e2-4c0d-b7d6-ee9e867eb1f6',
            name: 'attachments',
          },
          targetObjectMetadata: {
            __typename: 'object',
            id: '0e3c9a9d-8a60-4671-a466-7b840a422da2',
            nameSingular: 'attachment',
            namePlural: 'attachments',
          },
          targetFieldMetadata: {
            __typename: 'field',
            id: 'a920a0d6-8e71-4ab8-90b9-ab540e04732a',
            name: 'person',
          },
        },
      },
      {
        __typename: 'field',
        id: 'cc63e38f-56d6-495e-a545-edf101e400cf',
        type: 'TEXT',
        name: 'phone',
        label: 'Phone',
        description: 'Contact’s phone number',
        icon: 'IconPhone',
        isCustom: false,
        isActive: true,
        isSystem: false,
        isNullable: false,
        createdAt: '2024-05-16T10:54:27.788Z',
        updatedAt: '2024-05-16T10:54:27.788Z',
        fromRelationMetadata: null,
        toRelationMetadata: null,
        defaultValue: "''",
        options: null,
        relationDefinition: null,
      },
      {
        __typename: 'field',
        id: '0084a5f7-cb57-4cd5-8b14-93ab51c21f45',
        type: 'POSITION',
        name: 'position',
        label: 'Position',
        description: 'Person record Position',
        icon: 'IconHierarchy2',
        isCustom: false,
        isActive: true,
        isSystem: true,
        isNullable: true,
        createdAt: '2024-05-16T10:54:27.788Z',
        updatedAt: '2024-05-16T10:54:27.788Z',
        fromRelationMetadata: null,
        toRelationMetadata: null,
        defaultValue: null,
        options: null,
        relationDefinition: null,
      },
      {
        __typename: 'field',
        id: 'ca54aa1d-1ecb-486c-99ea-b8240871a0da',
        type: 'EMAIL',
        name: 'email',
        label: 'Email',
        description: 'Contact’s Email',
        icon: 'IconMail',
        isCustom: false,
        isActive: true,
        isSystem: false,
        isNullable: false,
        createdAt: '2024-05-16T10:54:27.788Z',
        updatedAt: '2024-05-16T10:54:27.788Z',
        fromRelationMetadata: null,
        toRelationMetadata: null,
        defaultValue: "''",
        options: null,
        relationDefinition: null,
      },
      {
        __typename: 'field',
        id: '54561a8e-b918-471b-a363-5a77f49cd348',
        type: 'TEXT',
        name: 'jobTitle',
        label: 'Job Title',
        description: 'Contact’s job title',
        icon: 'IconBriefcase',
        isCustom: false,
        isActive: true,
        isSystem: false,
        isNullable: false,
        createdAt: '2024-05-16T10:54:27.788Z',
        updatedAt: '2024-05-16T10:54:27.788Z',
        fromRelationMetadata: null,
        toRelationMetadata: null,
        defaultValue: "''",
        options: null,
        relationDefinition: null,
      },
      {
        __typename: 'field',
        id: '4e844d31-f117-443c-8754-8cb63e963ecc',
        type: 'DATE_TIME',
        name: 'updatedAt',
        label: 'Update date',
        description: 'Update date',
        icon: 'IconCalendar',
        isCustom: false,
        isActive: true,
        isSystem: true,
        isNullable: false,
        createdAt: '2024-05-16T10:54:27.788Z',
        updatedAt: '2024-05-16T10:54:27.788Z',
        fromRelationMetadata: null,
        toRelationMetadata: null,
        defaultValue: 'now',
        options: null,
        relationDefinition: null,
      },
      {
        __typename: 'field',
        id: '4ddd38df-d9a3-4889-a39f-1e336cd8113c',
        type: 'UUID',
        name: 'companyId',
        label: 'Company id (foreign key)',
        description: 'Contact’s company id foreign key',
        icon: 'IconBuildingSkyscraper',
        isCustom: false,
        isActive: true,
        isSystem: true,
        isNullable: true,
        createdAt: '2024-05-16T10:54:27.788Z',
        updatedAt: '2024-05-16T10:54:27.788Z',
        fromRelationMetadata: null,
        toRelationMetadata: null,
        defaultValue: null,
        options: null,
        relationDefinition: null,
      },
      {
        __typename: 'field',
        id: 'e6922ecb-7a3a-4520-b001-bbf95fc33197',
        type: 'RELATION',
        name: 'timelineActivities',
        label: 'Events',
        description: 'Events linked to the company',
        icon: 'IconTimelineEvent',
        isCustom: false,
        isActive: true,
        isSystem: true,
        isNullable: true,
        createdAt: '2024-05-16T10:54:27.788Z',
        updatedAt: '2024-05-16T10:54:27.788Z',
        fromRelationMetadata: {
          __typename: 'relation',
          id: '25150feb-fcd7-407e-b5fa-ffe58a0450ac',
          relationType: 'ONE_TO_MANY',
          toObjectMetadata: {
            __typename: 'object',
            id: '83b5ff3e-975e-4dc9-ba4d-c645a0d8afb2',
            dataSourceId: '0fd9fd54-0e8d-4f78-911c-76b33436a768',
            nameSingular: 'timelineActivity',
            namePlural: 'timelineActivities',
            isSystem: true,
            isRemote: false,
          },
          toFieldMetadataId: '556a12d4-ef0a-4232-963f-0f317f4c5ef5',
        },
        toRelationMetadata: null,
        defaultValue: null,
        options: null,
        relationDefinition: {
          __typename: 'RelationDefinition',
          relationId: '25150feb-fcd7-407e-b5fa-ffe58a0450ac',
          direction: 'ONE_TO_MANY',
          sourceObjectMetadata: {
            __typename: 'object',
            id: '4916628e-8570-4242-8970-f58c509e5a93',
            nameSingular: 'person',
            namePlural: 'people',
          },
          sourceFieldMetadata: {
            __typename: 'field',
            id: 'e6922ecb-7a3a-4520-b001-bbf95fc33197',
            name: 'timelineActivities',
          },
          targetObjectMetadata: {
            __typename: 'object',
            id: '83b5ff3e-975e-4dc9-ba4d-c645a0d8afb2',
            nameSingular: 'timelineActivity',
            namePlural: 'timelineActivities',
          },
          targetFieldMetadata: {
            __typename: 'field',
            id: '556a12d4-ef0a-4232-963f-0f317f4c5ef5',
            name: 'person',
          },
        },
      },
      {
        __typename: 'field',
        id: '07a8a574-ed28-4015-b456-c01ff3050e2b',
        type: 'FULL_NAME',
        name: 'name',
        label: 'Name',
        description: 'Contact’s name',
        icon: 'IconUser',
        isCustom: false,
        isActive: true,
        isSystem: false,
        isNullable: true,
        createdAt: '2024-05-16T10:54:27.788Z',
        updatedAt: '2024-05-16T10:54:27.788Z',
        fromRelationMetadata: null,
        toRelationMetadata: null,
        defaultValue: {
          lastName: "''",
          firstName: "''",
        },
        options: null,
        relationDefinition: null,
      },
      {
        __typename: 'field',
        id: 'c470144b-6692-47cb-a28f-04610d9d641c',
        type: 'LINK',
        name: 'xLink',
        label: 'X',
        description: 'Contact’s X/Twitter account',
        icon: 'IconBrandX',
        isCustom: false,
        isActive: true,
        isSystem: false,
        isNullable: true,
        createdAt: '2024-05-16T10:54:27.788Z',
        updatedAt: '2024-05-16T10:54:27.788Z',
        fromRelationMetadata: null,
        toRelationMetadata: null,
        defaultValue: {
          url: "''",
          label: "''",
        },
        options: null,
        relationDefinition: null,
      },
      {
        __typename: 'field',
        id: 'c692aa2c-e88e-4aff-b77e-b9ebf26509e3',
        type: 'RELATION',
        name: 'messageParticipants',
        label: 'Message Participants',
        description: 'Message Participants',
        icon: 'IconUserCircle',
        isCustom: false,
        isActive: true,
        isSystem: true,
        isNullable: true,
        createdAt: '2024-05-16T10:54:27.788Z',
        updatedAt: '2024-05-16T10:54:27.788Z',
        fromRelationMetadata: {
          __typename: 'relation',
          id: 'e2eb7156-6e65-4bf8-922b-670179744f27',
          relationType: 'ONE_TO_MANY',
          toObjectMetadata: {
            __typename: 'object',
            id: 'ffd8e640-84b7-4ed6-99e9-14def0f9d82b',
            dataSourceId: '0fd9fd54-0e8d-4f78-911c-76b33436a768',
            nameSingular: 'messageParticipant',
            namePlural: 'messageParticipants',
            isSystem: true,
            isRemote: false,
          },
          toFieldMetadataId: '8c4593a1-ad40-4681-92fe-43ad4fe60205',
        },
        toRelationMetadata: null,
        defaultValue: null,
        options: null,
        relationDefinition: {
          __typename: 'RelationDefinition',
          relationId: 'e2eb7156-6e65-4bf8-922b-670179744f27',
          direction: 'ONE_TO_MANY',
          sourceObjectMetadata: {
            __typename: 'object',
            id: '4916628e-8570-4242-8970-f58c509e5a93',
            nameSingular: 'person',
            namePlural: 'people',
          },
          sourceFieldMetadata: {
            __typename: 'field',
            id: 'c692aa2c-e88e-4aff-b77e-b9ebf26509e3',
            name: 'messageParticipants',
          },
          targetObjectMetadata: {
            __typename: 'object',
            id: 'ffd8e640-84b7-4ed6-99e9-14def0f9d82b',
            nameSingular: 'messageParticipant',
            namePlural: 'messageParticipants',
          },
          targetFieldMetadata: {
            __typename: 'field',
            id: '8c4593a1-ad40-4681-92fe-43ad4fe60205',
            name: 'person',
          },
        },
      },
      {
        __typename: 'field',
        id: '66d33eae-71be-49fa-ad7a-3e10ac53dfba',
        type: 'UUID',
        name: 'id',
        label: 'Id',
        description: 'Id',
        icon: 'Icon123',
        isCustom: false,
        isActive: true,
        isSystem: true,
        isNullable: false,
        createdAt: '2024-05-16T10:54:27.788Z',
        updatedAt: '2024-05-16T10:54:27.788Z',
        fromRelationMetadata: null,
        toRelationMetadata: null,
        defaultValue: 'uuid',
        options: null,
        relationDefinition: null,
      },
    ],
  },
  entityId: '20202020-2d40-4e49-8df4-9c6a049191df',
  relationEntityId: '20202020-c21e-4ec2-873b-de4264d89025',
  entityValue: {
    __typename: 'Person',
    asd: '',
    city: 'Seattle',
    jobTitle: '',
    name: {
      __typename: 'FullName',
      firstName: 'Lorie',
      lastName: 'Vladim',
    },
    createdAt: '2024-05-01T13:16:29.046Z',
    company: {
      __typename: 'Company',
      domainName: 'google.com',
      xLink: {
        __typename: 'Link',
        label: '',
        url: '',
      },
      name: 'Google',
      annualRecurringRevenue: {
        __typename: 'Currency',
        amountMicros: null,
        currencyCode: '',
      },
      employees: null,
      accountOwnerId: null,
      address: '',
      idealCustomerProfile: false,
      createdAt: '2024-05-01T13:16:29.046Z',
      id: '20202020-c21e-4ec2-873b-de4264d89025',
      position: 6,
      updatedAt: '2024-05-01T13:16:29.046Z',
      linkedinLink: {
        __typename: 'Link',
        label: '',
        url: '',
      },
    },
    id: '20202020-2d40-4e49-8df4-9c6a049191df',
    email: 'lorie.vladim@google.com',
    phone: '+33788901235',
    linkedinLink: {
      __typename: 'Link',
      label: '',
      url: '',
    },
    xLink: {
      __typename: 'Link',
      label: '',
      url: '',
    },
    tEst: '',
    position: 15,
  },
  relationFieldValue: {
    __typename: 'Company',
    domainName: 'microsoft.com',
    xLink: {
      __typename: 'Link',
      label: '',
      url: '',
    },
    name: 'Microsoft',
    annualRecurringRevenue: {
      __typename: 'Currency',
      amountMicros: null,
      currencyCode: '',
    },
    employees: null,
    accountOwnerId: null,
    address: '',
    idealCustomerProfile: false,
    createdAt: '2024-05-01T13:16:29.046Z',
    id: '20202020-ed89-413a-b31a-962986e67bb4',
    position: 4,
    updatedAt: '2024-05-01T13:16:29.046Z',
    linkedinLink: {
      __typename: 'Link',
      label: '',
      url: '',
    },
  },
  fieldDefinition: {
    fieldMetadataId: '4e79f0b7-d100-4e89-a07b-315a710b8059',
    label: 'Company',
    metadata: {
      fieldName: 'company',
      placeHolder: 'Company',
      relationType: 'TO_ONE_OBJECT',
      relationFieldMetadataId: '01fa2247-7937-4493-b7e2-3d72f05d6d25',
      relationObjectMetadataNameSingular: 'company',
      relationObjectMetadataNamePlural: 'companies',
      objectMetadataNameSingular: 'person',
      options: null,
    },
    iconName: 'IconBuildingSkyscraper',
    type: FieldMetadataType.Relation,
    position: 2,
    size: 150,
    isLabelIdentifier: false,
    isVisible: true,
    viewFieldId: '924f4c94-cbcd-4de5-b7a2-ebae2f0b2c3b',
    isSortable: false,
    isFilterable: true,
    defaultValue: null,
  },
};

const RelationFieldValueSetterEffect = () => {
  const setEntity = useSetRecoilState(recordStoreFamilyState(mock.entityId));

  const setRelationEntity = useSetRecoilState(
    recordStoreFamilyState(mock.relationEntityId),
  );

  const setRecordValue = useSetRecordValue();

  useEffect(() => {
    setEntity(mock.entityValue);
    setRelationEntity(mock.relationFieldValue);

    setRecordValue(mock.entityValue.id, mock.entityValue);
    setRecordValue(mock.relationFieldValue.id, mock.relationFieldValue);
  }, [setEntity, setRelationEntity, setRecordValue]);

  return null;
};

const meta: Meta = {
  title: 'RecordIndex/Table/RecordTableCell',
  decorators: [
    MemoryRouterDecorator,
    (Story) => (
      <RecordFieldValueSelectorContextProvider>
        <RecordTableContext.Provider
          value={{
            objectMetadataItem: mock.objectMetadataItem as any,
            onUpsertRecord: () => {},
            onOpenTableCell: () => {},
            onMoveFocus: () => {},
            onCloseTableCell: () => {},
            onMoveSoftFocusToCell: () => {},
            onContextMenu: () => {},
            onCellMouseEnter: () => {},
          }}
        >
          <RecordTableScope recordTableScopeId="asd" onColumnsChange={() => {}}>
            <RecordTableRowContext.Provider
              value={{
                recordId: mock.entityId,
                rowIndex: 0,
                pathToShowPage:
                  getBasePathToShowPage({
                    objectNameSingular:
                      mock.entityValue.__typename.toLocaleLowerCase(),
                  }) + mock.entityId,
                isSelected: false,
                isReadOnly: false,
              }}
            >
              <RecordTableCellContext.Provider
                value={{
                  columnDefinition: mock.fieldDefinition,
                  columnIndex: 0,
                }}
              >
                <FieldContext.Provider
                  value={{
                    entityId: mock.entityId,
                    basePathToShowPage: '/object-record/',
                    isLabelIdentifier: false,
                    fieldDefinition: {
                      ...mock.fieldDefinition,
                    },
                    hotkeyScope: 'hotkey-scope',
                  }}
                >
                  <RelationFieldValueSetterEffect />
                  <table>
                    <tbody>
                      <tr>
                        <Story />
                      </tr>
                    </tbody>
                  </table>
                </FieldContext.Provider>
              </RecordTableCellContext.Provider>
            </RecordTableRowContext.Provider>
          </RecordTableScope>
        </RecordTableContext.Provider>
      </RecordFieldValueSelectorContextProvider>
    ),
    ComponentDecorator,
  ],
  component: RecordTableCellFieldContextWrapper,
  argTypes: { value: { control: 'date' } },
  args: {},
};

export default meta;

type Story = StoryObj<typeof RecordTableCellFieldContextWrapper>;

export const Default: Story = {};

export const Performance = getProfilingStory({
  componentName: 'RecordTableCell',
  averageThresholdInMs: 0.4,
  numberOfRuns: 20,
  numberOfTestsPerRun: 100,
});
