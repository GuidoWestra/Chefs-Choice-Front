import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
//import recipe reducer
export default combineReducers({
  appState,
  user,
});
