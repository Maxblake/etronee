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

export const selectFindFeaturedCategoriesByParams = params =>
  createSelector(
    [selectFeaturedCategoriesData],
    featuredCategory =>
      featuredCategory.subcategories.find(
        eachCategory => eachCategory.category_id === params
      )
  );

export const selectFindFeaturedProductByParams = params =>
  createSelector(
    [selectFeaturedCategoriesData],
    featuredProducts =>
      featuredProducts.products.find(
        eachProduct => eachProduct.product_id === params
      )
  );
