export const makeArduinoCategoriesUrl = url => {
  const corsUrl = 'https://cors-anywhere.herokuapp.com/';
  return `${corsUrl + url}`;
};
