import FeaturedCategoriesActionTypes from './featured-categories.types';

export const fetchFeaturedCategoriesStart = () => ({
  type: FeaturedCategoriesActionTypes.FETCH_FEATURED_CATEGORIES_START
});

export const fetchFeaturedCategoriesSuccess = featuredCategories => ({
  type: FeaturedCategoriesActionTypes.FETCH_FEATURED_CATEGORIES_SUCCESS,
  payload: featuredCategories
});

export const fetchFeaturedCategoriesFailure = errorMessage => ({
  type: FeaturedCategoriesActionTypes.FETCH_FEATURED_CATEGORIES_FAILURE,
  payload: errorMessage
});
