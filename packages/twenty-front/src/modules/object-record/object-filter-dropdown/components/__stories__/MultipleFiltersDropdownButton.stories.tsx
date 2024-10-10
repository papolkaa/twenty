import { Meta, StoryObj } from '@storybook/react';

import { TaskGroups } from '@/activities/tasks/components/TaskGroups';
import { MultipleFiltersDropdownButton } from '@/object-record/object-filter-dropdown/components/MultipleFiltersDropdownButton';
import { ObjectFilterDropdownScope } from '@/object-record/object-filter-dropdown/scopes/ObjectFilterDropdownScope';
import { useSetRecoilComponentStateV2 } from '@/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { availableFilterDefinitionsComponentState } from '@/views/states/availableFilterDefinitionsComponentState';
import { ViewComponentInstanceContext } from '@/views/states/contexts/ViewComponentInstanceContext';
import { within } from '@storybook/test';
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
          type: FieldMetadataType.Emails,
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
        <ViewComponentInstanceContext.Provider value={{ instanceId }}>
          <ObjectFilterDropdownScope filterScopeId={instanceId}>
            <Story />
          </ObjectFilterDropdownScope>
        </ViewComponentInstanceContext.Provider>
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
