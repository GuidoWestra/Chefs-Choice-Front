import { compose, createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducer from "./rootReducer";

const composeEnhancers = compose;

const enhancer = composeEnhancers(applyMiddleware(ReduxThunk));

const store = createStore(reducer, enhancer);
export default store;
