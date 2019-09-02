import CategoriesActionTypes from './categories.types';

const INITIAL_STATE = {
  categoriesData: null,
  isCategoriesFetched: false,
  errorMessage: undefined
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoriesActionTypes.FETCH_CATEGORIES_START:
      return {
        ...state
      };
    case CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoriesData: action.payload,
        isCategoriesFetched: true
      };
    case CategoriesActionTypes.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default categoriesReducer;
