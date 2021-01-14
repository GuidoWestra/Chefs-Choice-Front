import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  name: null,
  email: null,
  token: AsyncStorage.getItem("token") || null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "Login_Succes":
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
