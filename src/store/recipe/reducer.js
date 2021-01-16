const initialState = {
  title: null,
  image: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "set_daily":
      return { ...action.payload };

    default:
      return state;
  }
};
