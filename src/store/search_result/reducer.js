const initialState = [{ title: null, image: null, summary: "", instructions: "" }];
export default (state = initialState, action) => {
  switch (action.type) {
    case "set_result":
      console.log("Reducer Called with:", action.payload);
      return [...action.payload];
    case "set_recipe":
      console.log("recipe reducer called with:", action.payload);
      return [action.payload];
    default:
      return state;
  }
};
