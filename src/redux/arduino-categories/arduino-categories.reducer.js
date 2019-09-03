import AdruinoCategoriesActionTypes from './arduino-categories.types';

const INITIAL_STATE = {
  arduinoCategoriesData: [],
  isArduinoCategoriesFetched: false,
  errorMessage: null
};

const arduinoCategoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AdruinoCategoriesActionTypes.FETCH_ARDUINO_CATEGORIES_START:
      return {
        ...state
      };
    case AdruinoCategoriesActionTypes.FETCH_ARDUINO_CATEGORIES_SUCCESS:
      return {
        ...state,
        arduinoCategoriesData: action.payload,
        isArduinoCategoriesFetched: true
      };
    case AdruinoCategoriesActionTypes.FETCH_ARDUINO_CATEGORIES_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return {
        ...state
      };
  }
};

export default arduinoCategoriesReducer;
