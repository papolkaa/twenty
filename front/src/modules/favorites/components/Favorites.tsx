import { useState } from 'react';
import styled from '@emotion/styled';
import { useRecoilCallback, useRecoilState } from 'recoil';

import { mapFavorites } from '@/favorites/utils/mapFavorites';
import { useFindManyObjectRecords } from '@/object-record/hooks/useFindManyObjectRecords';
import { PaginatedObjectTypeResults } from '@/object-record/types/PaginatedObjectTypeResults';
import { DraggableItem } from '@/ui/layout/draggable-list/components/DraggableItem';
import { DraggableList } from '@/ui/layout/draggable-list/components/DraggableList';
import NavItem from '@/ui/navigation/navbar/components/NavItem';
import NavTitle from '@/ui/navigation/navbar/components/NavTitle';
import { Avatar } from '@/users/components/Avatar';
import { Company, Favorite } from '~/generated-metadata/graphql';
import { getLogoUrlFromDomainName } from '~/utils';
import { isDeeplyEqual } from '~/utils/isDeeplyEqual';

import { useFavorites } from '../hooks/useFavorites';
import { favoritesState } from '../states/favoritesState';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  width: 100%;
`;

export const Favorites = () => {
  const [favorites] = useRecoilState(favoritesState);
  const { handleReorderFavorite } = useFavorites();
  const [allCompanies, setAllCompanies] = useState<
    Record<string, { name: string; domainName?: string }>
  >({});
  const [allPeople, setAllPeople] = useState<
    Record<string, { firstName: string; lastName: string; avatarUrl?: string }>
  >({});

  // This is only temporary and will be refactored once we have main identifiers
  const { loading: companiesLoading } = useFindManyObjectRecords({
    objectNamePlural: 'companiesV2',
    onCompleted: async (
      data: PaginatedObjectTypeResults<Required<Company>>,
    ) => {
      setAllCompanies(
        data.edges.reduce(
          (acc, { node: company }) => ({
            ...acc,
            [company.id]: {
              name: company.name,
              domainName: company.domainName,
            },
          }),
          {},
        ),
      );
    },
  });

  const { loading: peopleLoading } = useFindManyObjectRecords({
    objectNamePlural: 'peopleV2',
    onCompleted: async (data) => {
      setAllPeople(
        data.edges.reduce(
          (acc, { node: person }) => ({
            ...acc,
            [person.id]: {
              firstName: person.firstName,
              lastName: person.lastName,
              avatarUrl: person.avatarUrl,
            },
          }),
          {},
        ),
      );
    },
  });

  useFindManyObjectRecords({
    skip: companiesLoading || peopleLoading,
    objectNamePlural: 'favoritesV2',
    onCompleted: useRecoilCallback(
      ({ snapshot, set }) =>
        async (data: PaginatedObjectTypeResults<Required<Favorite>>) => {
          const favoriteState = snapshot.getLoadable(favoritesState);
          const favorites = favoriteState.getValue();

          const queriedFavorites = mapFavorites(data.edges, {
            ...allCompanies,
            ...allPeople,
          });

          if (!isDeeplyEqual(favorites, queriedFavorites)) {
            set(favoritesState, queriedFavorites);
          }
        },
      [allCompanies, allPeople],
    ),
  });

  if (!favorites || favorites.length === 0) return <></>;

  return (
    <StyledContainer>
      <NavTitle label="Favorites" />
      <DraggableList
        onDragEnd={handleReorderFavorite}
        draggableItems={
          <>
            {favorites.map((favorite, index) => {
              const { id, person, company } = favorite;
              return (
                <DraggableItem
                  key={id}
                  draggableId={id}
                  index={index}
                  itemComponent={
                    <>
                      {person && (
                        <NavItem
                          key={id}
                          label={`${person.firstName} ${person.lastName}`}
                          Icon={() => (
                            <Avatar
                              colorId={person.id}
                              avatarUrl={person.avatarUrl ?? ''}
                              type="rounded"
                              placeholder={`${person.firstName} ${person.lastName}`}
                            />
                          )}
                          to={`/object/personV2/${person.id}`}
                        />
                      )}
                      {company && (
                        <NavItem
                          key={id}
                          label={company.name}
                          Icon={() => (
                            <Avatar
                              avatarUrl={
                                getLogoUrlFromDomainName(company.domainName) ??
                                ''
                              }
                              type="squared"
                              placeholder={company.name}
                            />
                          )}
                          to={`/object/companyV2/${company.id}`}
                        />
                      )}
                    </>
                  }
                />
              );
            })}
          </>
        }
      />
    </StyledContainer>
  );
};
