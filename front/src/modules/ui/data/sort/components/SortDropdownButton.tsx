import { useCallback, useState } from 'react';
import { on } from 'events';
import { produce } from 'immer';

import { IconChevronDown } from '@/ui/display/icon';
import { LightButton } from '@/ui/input/button/components/LightButton';
import { Dropdown } from '@/ui/layout/dropdown/components/Dropdown';
import { DropdownMenuHeader } from '@/ui/layout/dropdown/components/DropdownMenuHeader';
import { DropdownMenuItemsContainer } from '@/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { DropdownMenuSeparator } from '@/ui/layout/dropdown/components/DropdownMenuSeparator';
import { useDropdown } from '@/ui/layout/dropdown/hooks/useDropdown';
import { DropdownScope } from '@/ui/layout/dropdown/scopes/DropdownScope';
import { MenuItem } from '@/ui/navigation/menu-item/components/MenuItem';
import { HotkeyScope } from '@/ui/utilities/hotkey/types/HotkeyScope';

import { SortDropdownId } from '../../../../views/components/view-bar/constants/SortDropdownId';
import { SortDefinition } from '../../../../views/components/view-bar/types/SortDefinition';
import {
  SORT_DIRECTIONS,
  SortDirection,
} from '../../../../views/components/view-bar/types/SortDirection';
import { useSort } from '../hooks/useSort';

export type SortDropdownButtonProps = {
  hotkeyScope: HotkeyScope;
  isPrimaryButton?: boolean;
};

export const SortDropdownButton = ({
  hotkeyScope,
}: SortDropdownButtonProps) => {
  const [isSortDirectionMenuUnfolded, setIsSortDirectionMenuUnfolded] =
    useState(false);

  const [selectedSortDirection, setSelectedSortDirection] =
    useState<SortDirection>('asc');

  const resetState = useCallback(() => {
    setIsSortDirectionMenuUnfolded(false);
    setSelectedSortDirection('asc');
  }, []);

  const { availableSort, onAddSort } = useSort();

  const isSortSelected = sorts.length > 0;

  const { toggleDropdown } = useDropdown({
    dropdownScopeId: SortDropdownId,
  });

  const handleButtonClick = () => {
    toggleDropdown();
    resetState();
  };

  const handleAddSort = (selectedSortDefinition: SortDefinition) => {
    toggleDropdown();
    on;

    setSorts(
      produce(sorts, (existingSortsDraft) => {
        const foundExistingSortIndex = existingSortsDraft.findIndex(
          (existingSort) => existingSort.key === selectedSortDefinition.key,
        );

        if (foundExistingSortIndex !== -1) {
          existingSortsDraft[foundExistingSortIndex].direction =
            selectedSortDirection;
        } else {
          existingSortsDraft.push({
            key: selectedSortDefinition.key,
            direction: selectedSortDirection,
            definition: selectedSortDefinition,
          });
        }
      }),
    );
  };

  const handleDropdownButtonClose = () => {
    resetState();
  };

  return (
    <DropdownScope dropdownScopeId={SortDropdownId}>
      <Dropdown
        dropdownHotkeyScope={hotkeyScope}
        dropdownOffset={{ y: 8 }}
        clickableComponent={
          <LightButton
            title="Sort"
            active={isSortSelected}
            onClick={handleButtonClick}
          />
        }
        dropdownComponents={
          <>
            {isSortDirectionMenuUnfolded ? (
              <DropdownMenuItemsContainer>
                {SORT_DIRECTIONS.map((sortOrder, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => {
                      setSelectedSortDirection(sortOrder);
                      setIsSortDirectionMenuUnfolded(false);
                    }}
                    text={sortOrder === 'asc' ? 'Ascending' : 'Descending'}
                  />
                ))}
              </DropdownMenuItemsContainer>
            ) : (
              <>
                <DropdownMenuHeader
                  EndIcon={IconChevronDown}
                  onClick={() => setIsSortDirectionMenuUnfolded(true)}
                >
                  {selectedSortDirection === 'asc' ? 'Ascending' : 'Descending'}
                </DropdownMenuHeader>
                <DropdownMenuSeparator />
                <DropdownMenuItemsContainer>
                  {availableSorts.map((availableSort, index) => (
                    <MenuItem
                      testId={`select-sort-${index}`}
                      key={index}
                      onClick={() => handleAddSort(availableSort)}
                      LeftIcon={availableSort.Icon}
                      text={availableSort.label}
                    />
                  ))}
                </DropdownMenuItemsContainer>
              </>
            )}
          </>
        }
        onClose={handleDropdownButtonClose}
      />
    </DropdownScope>
  );
};
