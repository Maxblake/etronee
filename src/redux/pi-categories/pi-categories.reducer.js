import PiCategoriesActionTypes from './pi-categories.types';

const INITIAL_STATE = {
  piCategoriesData: {},
  isPiCategoriesFetched: false,
  errorMessage: null
};

const piCategoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PiCategoriesActionTypes.FETCH_PI_CATEGORIES_START:
      return {
        ...state
      };
    case PiCategoriesActionTypes.FETCH_PI_CATEGORIES_SUCCESS:
      return {
        ...state,
        piCategoriesData: action.payload,
        isPiCategoriesFetched: true
      };
    case PiCategoriesActionTypes.FETCH_PI_CATEGORIES_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default piCategoriesReducer;
