import { spoonacular_daily, key_1, key_2, key_3, key_4 } from "../../../assets/constants";
import axios from "axios";
import { selectToken } from "./selectors";
import { appLoading, appDoneLoading, setMessage } from "../appState/actions";

const set_daily = (daily) => {
  return {
    type: "set_daily",
    payload: daily,
  };
};
export const fetchDaily = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.get(`${spoonacular_daily}?apiKey=${key_1}`);
      console.log("inside Fetch", response.data.recipes[0]);
      dispatch(set_daily(response.data.recipes[0]));
      dispatch(appDoneLoading());
    } catch (e) {
      dispatch(setMessage("danger", true, e.message));
      console.log("Something didnt go as planned inside recipe-actions");
    }
  };
};
