import { createSelector } from 'reselect';

const selectFeaturedCategories = state => state.featuredCategories;

export const selectFeaturedCategoriesData = createSelector(
  [selectFeaturedCategories],
  featuredCategoriesSate => featuredCategoriesSate.featuredCategoriesData
);

export const selectIsFeaturedCategoriesFetched = createSelector(
  [selectFeaturedCategories],
  featuredCategoriesSate => featuredCategoriesSate.isFeaturedCategoriesFetched
);
