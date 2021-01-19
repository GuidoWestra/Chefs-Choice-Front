import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import daily_recipe from "./daily_recipe/reducer";
//import recipe reducer
export default combineReducers({
  appState,
  user,
  daily_recipe,
});
