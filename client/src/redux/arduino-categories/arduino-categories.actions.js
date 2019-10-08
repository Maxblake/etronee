import AdruinoCategoriesActionTypes from './arduino-categories.types';

export const fetchArduinoCategoriesStart = () => ({
  type: AdruinoCategoriesActionTypes.FETCH_ARDUINO_CATEGORIES_START
});

export const fetchArduinoCategoriesSuccess = arduinoCategories => ({
  type: AdruinoCategoriesActionTypes.FETCH_ARDUINO_CATEGORIES_SUCCESS,
  payload: arduinoCategories
});

export const fetchArduinoCategoriesFailure = errorMessage => ({
  type: AdruinoCategoriesActionTypes.FETCH_ARDUINO_CATEGORIES_FAILURE,
  payload: errorMessage
});
