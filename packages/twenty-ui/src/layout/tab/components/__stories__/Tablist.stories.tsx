import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { IconCheckbox } from 'src/display';
import { ComponentDecorator } from 'src/testing/decorators/ComponentDecorator';
import { RecoilScope } from 'src/utilities/recoil-scope/components/RecoilScope';

import { TabList } from '../TabList';

const tabs = [
  {
    id: '1',
    title: 'Tab1',
    Icon: IconCheckbox,
    hide: true,
  },
  {
    id: '2',
    title: 'Tab2',
    Icon: IconCheckbox,
    hide: false,
  },
  {
    id: '3',
    title: 'Tab3',
    Icon: IconCheckbox,
    hide: false,
    disabled: true,
  },
  {
    id: '4',
    title: 'Tab4',
    Icon: IconCheckbox,
    hide: false,
    disabled: false,
  },
];

const meta: Meta<typeof TabList> = {
  title: 'UI/Layout/Tab/TabList',
  component: TabList,
  args: {
    tabListId: 'tab-list-id',
    tabs: tabs,
  },
  decorators: [
    (Story) => (
      <RecoilScope>
        <Story />
      </RecoilScope>
    ),
    ComponentDecorator,
  ],
};

export default meta;

type Story = StoryObj<typeof TabList>;

export const TabListDisplay: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.queryByText('Tab1');
    expect(submitButton).toBeNull();
    expect(await canvas.findByText('Tab2')).toBeInTheDocument();
    expect(await canvas.findByText('Tab3')).toBeInTheDocument();
    expect(await canvas.findByText('Tab4')).toBeInTheDocument();
  },
};
