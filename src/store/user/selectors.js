export const selectToken = (state) => {
  return state.user.token;
};

export const selectUser = (state) => state.user;

export const selectFav = (state) => state.user.recipes;
