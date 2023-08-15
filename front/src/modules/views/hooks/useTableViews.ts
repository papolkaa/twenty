import { useCallback } from 'react';
import { getOperationName } from '@apollo/client/utilities';

import { TableRecoilScopeContext } from '@/ui/table/states/recoil-scope-contexts/TableRecoilScopeContext';
import {
  type TableView,
  tableViewsByIdState,
  tableViewsState,
} from '@/ui/table/states/tableViewsState';
import { useRecoilScopedState } from '@/ui/utilities/recoil-scope/hooks/useRecoilScopedState';
import { useRecoilScopedValue } from '@/ui/utilities/recoil-scope/hooks/useRecoilScopedValue';
import {
  useCreateViewsMutation,
  useGetViewsQuery,
  useUpdateViewMutation,
  ViewType,
} from '~/generated/graphql';

import { GET_VIEWS } from '../graphql/queries/getViews';

export const useTableViews = ({
  objectId,
}: {
  objectId: 'company' | 'person';
}) => {
  const [, setViews] = useRecoilScopedState(
    tableViewsState,
    TableRecoilScopeContext,
  );
  const viewsById = useRecoilScopedValue(
    tableViewsByIdState,
    TableRecoilScopeContext,
  );

  const [createViewsMutation] = useCreateViewsMutation();
  const [updateViewMutation] = useUpdateViewMutation();

  const createViews = useCallback(
    (views: TableView[]) => {
      if (!views.length) return;

      return createViewsMutation({
        variables: {
          data: views.map((view) => ({
            ...view,
            objectId,
            type: ViewType.Table,
          })),
        },
        refetchQueries: [getOperationName(GET_VIEWS) ?? ''],
      });
    },
    [createViewsMutation, objectId],
  );

  const updateViewFields = useCallback(
    (views: TableView[]) => {
      if (!views.length) return;

      return Promise.all(
        views.map((view) =>
          updateViewMutation({
            variables: {
              data: { name: view.name },
              where: { id: view.id },
            },
            refetchQueries: [getOperationName(GET_VIEWS) ?? ''],
          }),
        ),
      );
    },
    [updateViewMutation],
  );

  useGetViewsQuery({
    variables: {
      where: {
        objectId: { equals: objectId },
      },
    },
    onCompleted: (data) => {
      setViews(
        data.views.map((view) => ({
          id: view.id,
          name: view.name,
        })),
      );
    },
  });

  const handleViewsChange = useCallback(
    async (nextViews: TableView[]) => {
      const viewsToCreate = nextViews.filter(
        (nextView) => !viewsById[nextView.id],
      );
      await createViews(viewsToCreate);

      const viewsToUpdate = nextViews.filter(
        (nextView) =>
          viewsById[nextView.id] &&
          viewsById[nextView.id].name !== nextView.name,
      );
      await updateViewFields(viewsToUpdate);
    },
    [createViews, updateViewFields, viewsById],
  );

  return { handleViewsChange };
};
