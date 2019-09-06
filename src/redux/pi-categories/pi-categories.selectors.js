import { createSelector } from 'reselect';

const selectPiCategories = state => state.piCategories;

export const selectPiCategoriesData = createSelector(
  [selectPiCategories],
  piCategoriesSate => piCategoriesSate.piCategoriesData
);

export const selectIsPiCategoriesFetched = createSelector(
  [selectPiCategories],
  piCategoriesSate => piCategoriesSate.isPiCategoriesFetched
);

export const selectFindPiCategoriesByParams = createSelector(
  [selectPiCategoriesData],
  piCategory => piCategory
);
