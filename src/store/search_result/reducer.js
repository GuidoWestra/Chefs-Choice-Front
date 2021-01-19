const initialState = {};
export default (state = initialState, action) => {
  console.log("reducer called");
  switch (action.type) {
    case "set_result":
      console.log("Reducer Called with", action.payload);
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
