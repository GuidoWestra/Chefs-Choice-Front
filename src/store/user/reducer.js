import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  name: null,
  email: null,
  token: null,
  recipes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "fav_added":
      return { ...state, recipes: [...state.recipes, action.payload] };

    case "fav_delete":
      return {
        ...state,
        recipes: state.recipes.filter((recipe) => recipe.api_id !== action.payload),
      };
    case "fav_delete2":
      return {
        ...state,
        recipes: state.recipes.filter((recipe) => recipe.id !== action.payload),
      };

    case "Login_Succes":
      console.log("whut am i", action.payload);
      AsyncStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case "Log_Out":
      AsyncStorage.removeItem("token");
      return { ...initialState, token: null };

    case "Token_Still_Valid":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
