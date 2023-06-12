import {
  TbBuilding,
  TbInbox,
  TbSearch,
  TbSettings,
  TbUser,
} from 'react-icons/tb';
import { useMatch, useResolvedPath } from 'react-router-dom';

import NavItemsContainer from '@/ui/layout/navbar/NavItemsContainer';

import { Navbar } from './../../layout/navbar/Navbar';
import NavItem from './../../layout/navbar/NavItem';
import NavTitle from './../../layout/navbar/NavTitle';
import NavWorkspaceButton from './../../layout/navbar/NavWorkspaceButton';

export function AppNavbar() {
  return (
    <Navbar width="220px">
      <NavWorkspaceButton />
      <NavItemsContainer>
        <NavItemsContainer>
          <NavItem
            label="Search"
            to="/search"
            icon={<TbSearch size={16} />}
            soon={true}
          />
          <NavItem
            label="Inbox"
            to="/inbox"
            icon={<TbInbox size={16} />}
            soon={true}
          />
          <NavItem
            label="Settings"
            to="/settings"
            icon={<TbSettings size={16} />}
          />
          <NavTitle label="Workspace" />
          <NavItem
            label="People"
            to="/people"
            icon={<TbUser size={16} />}
            active={
              !!useMatch({
                path: useResolvedPath('/people').pathname,
                end: true,
              })
            }
          />
          <NavItem
            label="Companies"
            to="/companies"
            icon={<TbBuilding size={16} />}
            active={
              !!useMatch({
                path: useResolvedPath('/companies').pathname,
                end: true,
              })
            }
          />
        </NavItemsContainer>
      </NavItemsContainer>
    </Navbar>
  );
}
