import { createContext, RefObject } from 'react';

type ScrollWrapperContextValue = {
  ref: RefObject<HTMLDivElement>;
  id: string;
};

export type ContextProviderName =
  | 'eventList'
  | 'commandMenu'
  | 'recordBoardX'
  | 'recordBoardY'
  | 'recordTableWithWrappers'
  | 'settingsPageContainer'
  | 'dropdownMenuItemsContainer'
  | 'showPageContainer'
  | 'showPageLeftContainer'
  | 'tabList'
  | 'releases'
  | 'test'
  | 'showPageActivityContainer';

const createScrollWrapperContext = (id: string) =>
  createContext<ScrollWrapperContextValue>({
    ref: { current: null },
    id,
  });

export const EventListScrollWrapperContext =
  createScrollWrapperContext('eventList');
export const CommandMenuScrollWrapperContext =
  createScrollWrapperContext('commandMenu');
export const RecordBoardScrollXWrapperContext =
  createScrollWrapperContext('recordBoardX');
export const RecordBoardScrollYWrapperContext =
  createScrollWrapperContext('recordBoardY');
export const RecordTableWithWrappersScrollWrapperContext =
  createScrollWrapperContext('recordTableWithWrappers');
export const SettingsPageContainerScrollWrapperContext =
  createScrollWrapperContext('settingsPageContainer');
export const DropdownMenuItemsContainerScrollWrapperContext =
  createScrollWrapperContext('dropdownMenuItemsContainer');
export const ShowPageContainerScrollWrapperContext =
  createScrollWrapperContext('showPageContainer');
export const ShowPageLeftContainerScrollWrapperContext =
  createScrollWrapperContext('showPageLeftContainer');
export const TabListScrollWrapperContext =
  createScrollWrapperContext('tabList');
export const ReleasesScrollWrapperContext =
  createScrollWrapperContext('releases');
export const ShowPageActivityContainerScrollWrapperContext =
  createScrollWrapperContext('showPageActivityContainer');
export const TestScrollWrapperContext = createScrollWrapperContext('test');

export const getContextByProviderName = (
  contextProviderName: ContextProviderName,
) => {
  switch (contextProviderName) {
    case 'eventList':
      return EventListScrollWrapperContext;
    case 'commandMenu':
      return CommandMenuScrollWrapperContext;
    case 'recordBoardX':
      return RecordBoardScrollXWrapperContext;
    case 'recordBoardY':
      return RecordBoardScrollYWrapperContext;
    case 'recordTableWithWrappers':
      return RecordTableWithWrappersScrollWrapperContext;
    case 'settingsPageContainer':
      return SettingsPageContainerScrollWrapperContext;
    case 'dropdownMenuItemsContainer':
      return DropdownMenuItemsContainerScrollWrapperContext;
    case 'showPageContainer':
      return ShowPageContainerScrollWrapperContext;
    case 'showPageLeftContainer':
      return ShowPageLeftContainerScrollWrapperContext;
    case 'tabList':
      return TabListScrollWrapperContext;
    case 'releases':
      return ReleasesScrollWrapperContext;
    case 'test':
      return TestScrollWrapperContext;
    case 'showPageActivityContainer':
      return ShowPageActivityContainerScrollWrapperContext;
    default:
      throw new Error('Context Provider not available');
  }
};
