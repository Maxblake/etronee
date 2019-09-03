export const makeArduinoCategoriesUrl = url => {
  const corsUrl = 'https://cors-anywhere.herokuapp.com/';
  return `${corsUrl + url}`;
};

export const findArduinoBoardsCategory = ([
  arduinoCategoriesObj,
  subcategoryId1
]) => {
  const arduinoBoardCategoryData = arduinoCategoriesObj['subcategories'].map(
    subcategory => checkSubcategory(subcategory, subcategoryId1)
  );

  return arduinoBoardCategoryData.filter(eachSubcategory => eachSubcategory)[0];
};

const checkSubcategory = (subcategory, subcategoryId) => {
  if (subcategory['category_id'] === subcategoryId) return subcategory;
};
