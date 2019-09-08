import { createSelector } from 'reselect';

const selectPiCategories = state => state.piCategories;

export const selectPiCategoriesData = createSelector(
  [selectPiCategories],
  piCategoriesState => piCategoriesState.piCategoriesData
);

export const selectIsPiCategoriesFetched = createSelector(
  [selectPiCategories],
  piCategoriesState => piCategoriesState.isPiCategoriesFetched
);

export const selectFindPiCategoriesByParams = createSelector(
  [selectPiCategoriesData],
  piCategory => piCategory
);
