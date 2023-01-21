export const findByIndex = (arr, key, value) => {
  let index = arr.findIndex((obj) => obj[key] === value);
  return index;
};
