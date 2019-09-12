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

export const selectFindArduinoCategoriesByParams = createSelector(
  [selectArduinoCategoriesData],
  arduinoCategory => arduinoCategory
);

export const selectFindArduinoProductByParams = params =>
  createSelector(
    [selectFindArduinoCategoriesByParams],
    arduinoProducts =>
      arduinoProducts.products.find(
        eachProduct => eachProduct.product_id === params
      )
  );

export const selectArduinoMatch = ownProps => ownProps.match;

export const selectArduinoParams = createSelector(
  [selectArduinoMatch],
  match => match.params
);

export const selecArduinoCategoryId = createSelector(
  [selectArduinoParams],
  params => params.categoryId
);

export const selectArduinoProductId = createSelector(
  [selectArduinoParams],
  params => params.productId
);
