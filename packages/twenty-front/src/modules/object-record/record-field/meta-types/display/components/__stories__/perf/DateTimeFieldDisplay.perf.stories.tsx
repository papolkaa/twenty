import { Meta, StoryObj } from '@storybook/react';
import { ComponentDecorator } from 'twenty-ui';

import { DateTimeFieldDisplay } from '@/object-record/record-field/meta-types/display/components/DateTimeFieldDisplay';
import { getFieldDecorator } from '~/testing/decorators/getFieldDecorator';
import { MemoryRouterDecorator } from '~/testing/decorators/MemoryRouterDecorator';
import { getProfilingStory } from '~/testing/profiling/utils/getProfilingStory';

const meta: Meta = {
  title: 'UI/Data/Field/Display/DateTimeFieldDisplay',
  decorators: [
    MemoryRouterDecorator,
    getFieldDecorator('person', 'createdAt'),
    ComponentDecorator,
  ],
  component: DateTimeFieldDisplay,
  args: {},
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export default meta;

type Story = StoryObj<typeof DateTimeFieldDisplay>;

export const Default: Story = {};

export const Elipsis: Story = {
  parameters: {
    container: { width: 50 },
  },
};

export const Performance = getProfilingStory({
  componentName: 'DateTimeFieldDisplay',
  averageThresholdInMs: 0.1,
  numberOfRuns: 50,
  numberOfTestsPerRun: 100,
});
