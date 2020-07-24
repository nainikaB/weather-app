import { createStore, combineReducers, applyMiddleware } from "redux";
import weatherReducer from "./weatherReducer";
import thunk from "redux-thunk";

const configureStore = () => {
  const rootReducer = createStore(
    combineReducers({
      weatherObj: weatherReducer,
    }),
    applyMiddleware(thunk)
  );
  return rootReducer;
};

export default configureStore;
