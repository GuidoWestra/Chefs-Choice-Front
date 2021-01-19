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

export const toggleFav = (recipe) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const token = selectToken(getState());
      const { id } = recipe;
      console.log("inside store with recipe and id", id, token);
      await axios.post(
        `${apiUrl}/favorites/toggle/${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Succes recipe added:", apiUrl);
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
      if (e.response) {
        console.log(e.response.data.message);
        dispatch(setMessage("danger", true, e.response.data.message));
      } else {
        console.log(e.message);
        dispatch(setMessage("danger", true, e.message));
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
        console.log(e.message);
        dispatch(setMessage("danger", true, e));
      } else {
        console.log("Oops");
        dispatch(setMessage("danger", true, e));
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
