export const makePiCategoriesUrl = url => {
  const corsUrl = 'https://cors-anywhere.herokuapp.com/';
  return `${corsUrl + url}`;
};

export const findPiBoardsCategory = ([
  piCategoriesObj,
  subcategoriesId,
  piBoardCategoryId
]) => {
  const piBoardCategoriesData = piCategoriesObj['subcategories'].map(
    subcategory => checkSubcategory(subcategory, subcategoriesId)
  );
  const piBoardsCategories = piBoardCategoriesData.filter(
    eachSubcategory => eachSubcategory
  )[0];
  return piBoardsCategories.subcategories.filter(
    eachPiBoardCategory =>
      eachPiBoardCategory['category_id'] === piBoardCategoryId
  )[0];
};

const checkSubcategory = (subcategory, subcategoriesId) => {
  if (subcategory['category_id'] === subcategoriesId) return subcategory;
};
