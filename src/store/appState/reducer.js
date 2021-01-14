const initialState = {
  loading: false,
  message: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "App_Loading":
      return { ...state, loading: true };

    case "App_Done_Loading":
      return { ...state, loading: false };

    case "Set_Message":
      return { ...state, message: action.payload };

    case "Clear_Message":
      return { ...state, message: null };

    default:
      return state;
  }
};
