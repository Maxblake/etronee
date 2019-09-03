import { combineReducers } from 'redux';

import featuredCategoriesReducer from './featured-categories/featured-categories.reducer';
import arduinoCategoriesReducer from './arduino-categories/arduino-categories.reducer';

export default combineReducers({
  featuredCategories: featuredCategoriesReducer,
  arduinoCategories: arduinoCategoriesReducer
});
