import PiCategoriesActionTypes from './pi-categories.types';

export const fetchPiCategoriesStart = () => ({
  type: PiCategoriesActionTypes.FETCH_PI_CATEGORIES_START
});

export const fetchPiCategoriesSuccess = piCategories => ({
  type: PiCategoriesActionTypes.FETCH_PI_CATEGORIES_SUCCESS,
  payload: piCategories
});

export const fetchPiCategoriesFailure = errorMessage => ({
  type: PiCategoriesActionTypes.FETCH_PI_CATEGORIES_FAILURE,
  payload: errorMessage
});
