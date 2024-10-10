import { Meta, StoryObj } from '@storybook/react';

import { TaskGroups } from '@/activities/tasks/components/TaskGroups';
import { MultipleFiltersDropdownButton } from '@/object-record/object-filter-dropdown/components/MultipleFiltersDropdownButton';
import { ObjectFilterDropdownScope } from '@/object-record/object-filter-dropdown/scopes/ObjectFilterDropdownScope';
import { ObjectFilterDropdownComponentInstanceContext } from '@/object-record/object-filter-dropdown/states/contexts/ObjectFilterDropdownComponentInstanceContext';
import { useRecordTableStates } from '@/object-record/record-table/hooks/internal/useRecordTableStates';
import { RecordTableScopeInternalContext } from '@/object-record/record-table/scopes/scope-internal-context/RecordTableScopeInternalContext';
import { ColumnDefinition } from '@/object-record/record-table/types/ColumnDefinition';
import { useSetRecoilComponentStateV2 } from '@/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { availableFilterDefinitionsComponentState } from '@/views/states/availableFilterDefinitionsComponentState';
import { ViewComponentInstanceContext } from '@/views/states/contexts/ViewComponentInstanceContext';
import { within } from '@storybook/test';
import { useSetRecoilState } from 'recoil';
import { ComponentDecorator } from 'twenty-ui';
import { FieldMetadataType } from '~/generated/graphql';
import { IconsProviderDecorator } from '~/testing/decorators/IconsProviderDecorator';
import { ObjectMetadataItemsDecorator } from '~/testing/decorators/ObjectMetadataItemsDecorator';
import { SnackBarDecorator } from '~/testing/decorators/SnackBarDecorator';

const meta: Meta<typeof MultipleFiltersDropdownButton> = {
  title:
    'Modules/ObjectRecord/ObjectFilterDropdown/MultipleFiltersDropdownButton',
  component: MultipleFiltersDropdownButton,
  decorators: [
    (Story) => {
      const instanceId = 'entity-tasks-filter-scope';
      const setAvailableFilterDefinitions = useSetRecoilComponentStateV2(
        availableFilterDefinitionsComponentState,
        instanceId,
      );

      const { tableColumnsState } = useRecordTableStates(instanceId);

      const setTableColumns = useSetRecoilState(tableColumnsState);

      setTableColumns([
        {
          fieldMetadataId: '1',
          iconName: 'IconUser',
          label: 'Text',
          type: FieldMetadataType.Text,
          isVisible: true,
          metadata: {
            fieldName: 'text',
          },
        } as ColumnDefinition<any>,
        {
          fieldMetadataId: '2',
          iconName: 'Icon123',
          label: 'Email',
          type: FieldMetadataType.Email,
          isVisible: true,
          metadata: {
            fieldName: 'email',
          },
        } as ColumnDefinition<any>,
        {
          fieldMetadataId: '3',
          iconName: 'IconNumber',
          label: 'Number',
          type: FieldMetadataType.Number,
          isVisible: true,
          metadata: {
            fieldName: 'number',
          },
        } as ColumnDefinition<any>,
        {
          fieldMetadataId: '4',
          iconName: 'IconCalendar',
          label: 'Date',
          type: FieldMetadataType.DateTime,
          isVisible: true,
          metadata: {
            fieldName: 'date',
          },
        } as ColumnDefinition<any>,
      ]);

      setAvailableFilterDefinitions([
        {
          fieldMetadataId: '1',
          iconName: 'IconUser',
          label: 'Text',
          type: FieldMetadataType.Text,
        },
        {
          fieldMetadataId: '2',
          iconName: 'Icon123',
          label: 'Email',
          type: FieldMetadataType.Email,
        },
        {
          fieldMetadataId: '3',
          iconName: 'IconNumber',
          label: 'Number',
          type: FieldMetadataType.Number,
        },
        {
          fieldMetadataId: '3',
          iconName: 'IconCalendar',
          label: 'Date',
          type: FieldMetadataType.DateTime,
        },
      ]);
      return (
        <ObjectFilterDropdownComponentInstanceContext.Provider
          value={{ instanceId }}
        >
          <RecordTableScopeInternalContext.Provider
            value={{ scopeId: instanceId, onColumnsChange: () => {} }}
          >
            <ViewComponentInstanceContext.Provider value={{ instanceId }}>
              <ObjectFilterDropdownScope filterScopeId={instanceId}>
                <Story />
              </ObjectFilterDropdownScope>
            </ViewComponentInstanceContext.Provider>
          </RecordTableScopeInternalContext.Provider>
        </ObjectFilterDropdownComponentInstanceContext.Provider>
      );
    },
    ObjectMetadataItemsDecorator,
    SnackBarDecorator,
    ComponentDecorator,
    IconsProviderDecorator,
  ],
  args: {
    hotkeyScope: {
      scope: 'object-filter-dropdown',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TaskGroups>;

export const Default: Story = {
  play: async () => {
    const canvas = within(document.body);

    const filterButton = await canvas.findByText('Filter');

    filterButton.click();

    const textFilter = await canvas.findByText('Text');

    textFilter.click();

    const operatorDropdown = await canvas.findByText('Contains');

    operatorDropdown.click();

    const containsOption = await canvas.findByText("Doesn't contain");

    containsOption.click();
  },
};

export const Date: Story = {
  play: async () => {
    const canvas = within(document.body);

    const filterButton = await canvas.findByText('Filter');

    filterButton.click();

    const dateFilter = await canvas.findByText('Date');

    dateFilter.click();
  },
};

export const Number: Story = {
  play: async () => {
    const canvas = within(document.body);

    const filterButton = await canvas.findByText('Filter');

    filterButton.click();

    const dateFilter = await canvas.findByText('Number');

    dateFilter.click();
  },
};
