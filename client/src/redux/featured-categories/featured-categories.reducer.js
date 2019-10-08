import FeaturedCategoriesActionTypes from './featured-categories.types';

const INITIAL_STATE = {
  featuredCategoriesData: {},
  isFeaturedCategoriesFetched: false,
  errorMessage: null
};

const featuredCategoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FeaturedCategoriesActionTypes.FETCH_FEATURED_CATEGORIES_START:
      return {
        ...state
      };
    case FeaturedCategoriesActionTypes.FETCH_FEATURED_CATEGORIES_SUCCESS:
      return {
        ...state,
        featuredCategoriesData: action.payload,
        isFeaturedCategoriesFetched: true
      };
    case FeaturedCategoriesActionTypes.FETCH_FEATURED_CATEGORIES_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default featuredCategoriesReducer;
