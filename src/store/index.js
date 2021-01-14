import { compose, createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import combineReducers from "./rootReducer";

const composeEnhancers = compose;

const enhancer = composeEnhancers(applyMiddleware(ReduxThunk));

const store = createStore(combineReducers, enhancer);
export default store;
