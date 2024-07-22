import { useRecoilValue } from 'recoil';

import { usePrepareFindManyActivitiesQuery } from '@/activities/hooks/usePrepareFindManyActivitiesQuery';
import { objectShowPageTargetableObjectState } from '@/activities/timelineActivities/states/objectShowPageTargetableObjectIdState';
import { CoreObjectNameSingular } from '@/object-metadata/types/CoreObjectNameSingular';
import { isDefined } from '~/utils/isDefined';

// This hook should only be executed if the normalized cache is up-to-date
// It will take a targetableObject and prepare the queries for the activities
// based on the activityTargets of the targetableObject
export const useRefreshShowPageFindManyActivitiesQueries = ({
  objectNameSingular,
}: {
  objectNameSingular: CoreObjectNameSingular;
}) => {
  const objectShowPageTargetableObject = useRecoilValue(
    objectShowPageTargetableObjectState,
  );

  const { prepareFindManyActivitiesQuery } = usePrepareFindManyActivitiesQuery({
    objectNameSingular,
  });

  const refreshShowPageFindManyActivitiesQueries = () => {
    if (isDefined(objectShowPageTargetableObject)) {
      prepareFindManyActivitiesQuery({
        targetableObject: objectShowPageTargetableObject,
      });
      prepareFindManyActivitiesQuery({
        targetableObject: objectShowPageTargetableObject,
        additionalFilter: {
          status: { is: 'TODO' },
        },
      });
      prepareFindManyActivitiesQuery({
        targetableObject: objectShowPageTargetableObject,
        additionalFilter: {},
      });
    }
  };

  return {
    refreshShowPageFindManyActivitiesQueries,
  };
};
