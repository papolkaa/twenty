import { Meta, StoryObj } from '@storybook/react';

import { ComponentDecorator } from 'src/testing/decorators/ComponentDecorator';

import { Pill } from '../Pill';

const meta: Meta<typeof Pill> = {
  title: 'UI/Display/Pill/Pill',
  component: Pill,
};

export default meta;
type Story = StoryObj<typeof Pill>;

export const Default: Story = {
  args: {
    label: 'Soon',
  },
  decorators: [ComponentDecorator],
};
