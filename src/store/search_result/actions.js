import {
  spoonacular_daily,
  spoonacular_search,
  spoonacular_recipe,
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
const set_recipe = (result) => {
  return {
    type: "set_recipe",
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
      dispatch(set_result(response.data));
      dispatch(appDoneLoading());
    } catch (e) {
      dispatch(setMessage("danger", true, e.message));
    }
  };
};

export const fetchRecipe = (recipe) => {
  return async (dispatch, getState) => {
    dispatch(appDoneLoading());
    let id = recipe.api_id;
    if (id === undefined) id = recipe.id;
    try {
      const recipe = await axios.get(`${spoonacular_recipe}/${id}/information?apiKey=${key_2}`);
      dispatch(set_recipe(recipe.data));
    } catch (e) {
      return console.log(e.message);
    }
  };
};
