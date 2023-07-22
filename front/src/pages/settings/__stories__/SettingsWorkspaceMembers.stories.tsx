import type { Meta, StoryObj } from '@storybook/react';

import { graphqlMocks } from '~/testing/graphqlMocks';
import { mockedUserJWT } from '~/testing/mock-data/jwt';
import { getRenderWrapperForPage } from '~/testing/renderWrappers';

import { SettingsWorkspaceMembers } from '../SettingsWorkspaceMembers';

const meta: Meta<typeof SettingsWorkspaceMembers> = {
  title: 'Pages/Settings/SettingsWorkspaceMembers',
  component: SettingsWorkspaceMembers,
};

export default meta;

export type Story = StoryObj<typeof SettingsWorkspaceMembers>;

export const Default: Story = {
  render: getRenderWrapperForPage(
    <SettingsWorkspaceMembers />,
    '/settings/workspace-members',
  ),
  parameters: {
    msw: graphqlMocks,
  },
};
