import { ThemeProvider } from '@emotion/react';
import { lightTheme } from '../../../../layout/styles/themes';
import { FilterDropdownButton } from '../FilterDropdownButton';
import styled from '@emotion/styled';
import { FilterType, SelectedFilterType } from '../interface';
import {
  faUser,
  faBuildings,
  faEnvelope,
  faPhone,
  faCalendar,
  faMapPin,
} from '@fortawesome/pro-regular-svg-icons';
import { useCallback, useState } from 'react';
import { GET_PEOPLE } from '../../../../services/people';

const component = {
  title: 'FilterDropdownButton',
  component: FilterDropdownButton,
};

export default component;

type OwnProps = {
  setFilters: (filters: SelectedFilterType[]) => void;
};

const availableFilters = [
  {
    key: 'fullname',
    label: 'People',
    icon: faUser,
    searchQuery: GET_PEOPLE,
    searchTemplate: {
      _or: [
        { firstname: { _ilike: 'value' } },
        { lastname: { _ilike: 'value' } },
      ],
    },
    whereTemplate: {
      _or: [
        { firstname: { _ilike: 'value' } },
        { lastname: { _ilike: 'value' } },
      ],
    },
  },
] satisfies FilterType[];

const StyleDiv = styled.div`
  height: 200px;
  width: 200px;
`;

export const RegularFilterDropdownButton = ({ setFilters }: OwnProps) => {
  const [, innerSetFilters] = useState<SelectedFilterType[]>([]);
  const outerSetFilters = useCallback(
    (filter: SelectedFilterType) => {
      innerSetFilters([filter]);
      setFilters([filter]);
    },
    [setFilters],
  );
  return (
    <ThemeProvider theme={lightTheme}>
      <StyleDiv>
        <FilterDropdownButton
          availableFilters={availableFilters}
          isFilterSelected={true}
          onFilterSearch={jest.fn()}
          onFilterSelect={outerSetFilters}
          filterSearchResults={[]}
        />
      </StyleDiv>
    </ThemeProvider>
  );
};
