import { createSelector } from 'reselect';

const selectArduinoCategories = state => state.arduinoCategories;

export const selectArduinoCategoriesData = createSelector(
  [selectArduinoCategories],
  arduinoCategoriesSate => arduinoCategoriesSate.arduinoCategoriesData
);

export const selectIsArduinoCategoriesFetched = createSelector(
  [selectArduinoCategories],
  arduinoCategoriesSate => arduinoCategoriesSate.isArduinoCategoriesFetched
);
