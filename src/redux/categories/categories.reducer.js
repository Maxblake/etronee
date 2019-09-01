import CategoriesActionTypes from './categories.types';

const INITIAL_STATE = {
  categoriesData: null
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoriesData: action.payload
      };
    default:
      return state;
  }
};

export default categoriesReducer;
