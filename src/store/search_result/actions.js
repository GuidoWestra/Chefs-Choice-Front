import {
  spoonacular_daily,
  spoonacular_search,
  key_1,
  key_2,
  key_3,
  key_4,
} from "../../../assets/constants";
import axios from "axios";
import { selectToken } from "./selectors";
import { appLoading, appDoneLoading, setMessage } from "../appState/actions";

const set_result = (result) => {
  return {
    type: "set_result",
    payload: result,
  };
};
export const fetchResult = (ingredients) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const api_ingredients = ingredients.join(",+");
      const response = await axios.get(
        `${spoonacular_search}?ingredients=${api_ingredients}&number=5&apiKey=${key_2}`
      );
      console.log("This is response", response);
      dispatch(set_result(response.data));
      dispatch(appDoneLoading());
    } catch (e) {
      dispatch(setMessage("danger", true, e.message));
      console.log("Something didnt go as planned inside", e);
    }
  };
};
