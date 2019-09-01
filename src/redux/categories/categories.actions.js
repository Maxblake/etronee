import CategoriesActionTypes from './categories.types';

export const fetchCategoriesData = categories => ({
  type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS,
  payload: categories
});
