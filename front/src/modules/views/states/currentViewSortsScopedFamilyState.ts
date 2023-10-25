import { createScopedFamilyState } from '@/ui/utilities/recoil-scope/utils/createScopedFamilyState';

import { Sort } from '../components/view-bar/types/Sort';

export const currentViewSortsScopedFamilyState = createScopedFamilyState<
  Sort[],
  string
>({
  key: 'currentViewSortsScopedFamilyState',
  defaultValue: [],
});
