import { apiUrl } from "../../../assets/constants";
import axios from "axios";
import { selectToken } from "./selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";
import { useSelector } from "react-redux";
export const favAdded = (payload) => {
  return {
    type: "fav_added",
    payload: payload,
  };
};
export const favDelete = (payload) => {
  return {
    type: "fav_delete",
    payload: payload,
  };
};
export const favDelete2 = (payload) => {
  return {
    type: "fav_delete2",
    payload: payload,
  };
};

export const loginSucces = (userWithToken) => {
  return {
    type: "Login_Succes",
    payload: userWithToken,
  };
};

const tokenStillValid = (userWithoutToken) => {
  return {
    type: "Token_Still_Valid",
    payload: userWithoutToken,
  };
};
export const logOut = () => ({ type: "Log_Out" });

export const fetchFav = () => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    const response = await axios.get(
      `${apiUrl}/favorites/list`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  };
};

export const toggleFav = (recipe) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const token = selectToken(getState());
      let id = recipe.api_id;
      if (id === undefined) id = recipe.id;

      const response = await axios.post(
        `${apiUrl}/favorites/toggle/${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.data.message === "Favorite Added") {
        dispatch(favAdded(recipe));
        dispatch(showMessageWithTimeout("success", true, response.data.message));
      }
      if (response.data.message === "Favorite deleted") {
        dispatch(favDelete(id));
        dispatch(favDelete2(id));
      }
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const signUp = (name, email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/signup`, {
        name,
        email,
        password,
      });
      dispatch(loginSucces(response.data));
      dispatch(showMessageWithTimeout("success", true, "account created"));
      dispatch(appDoneLoading());
      dispatch(login(email, password));
    } catch (e) {
      if (e.message) {
        console.log("Error in actions", e);
        dispatch(showMessageWithTimeout("danger", true, e.response.data.message));
      } else {
        dispatch(showMessageWithTimeout("danger", true, e));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/login`, {
        email: email,
        password: password,
      });
      dispatch(loginSucces(response.data));
      dispatch(showMessageWithTimeout("success", false, "welcome back!", 1500));
      dispatch(appDoneLoading());
    } catch (e) {
      if (e.message) {
        console.log("Error in actions", e.response.data.message);
        dispatch(showMessageWithTimeout("danger", true, e.response.data.message));
      } else {
        dispatch(showMessageWithTimeout("danger", true, e));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const getUserWithToken = () => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    if (token === null) return;

    dispatch(appLoading());
    try {
      const response = await axios.get(`${apiUrl}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(tokenStillValid(response.data));
      dispatch(appDoneLoading());
    } catch (e) {
      if (e.message) {
        console.log(e.response.message);
      } else {
        console.log(error);
      }
      dispatch(logOut());
      dispatch(appDoneLoading());
    }
  };
};
/* fix redux savings from back end */
