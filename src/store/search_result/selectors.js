export const selectResult = (state) => {
  return state.search_result;
};
export const selectRecipe = (state) => {
  return state.search_result[0];
};
