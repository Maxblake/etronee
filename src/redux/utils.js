export const makeCategoriesUrl = url => {
  const corsUrl = 'https://cors-anywhere.herokuapp.com/';
  return `${corsUrl + url}`;
};

export const findBoardsCategory = ([categoriesObj, subcategoryId]) => {
  const boardCategoryData = categoriesObj['subcategories'].filter(
    subcategory => subcategory['category_id'] === subcategoryId
  );
  return boardCategoryData[0];
};
