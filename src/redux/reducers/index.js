import { createStore, combineReducers, applyMiddleware } from "redux";
// import city_name from "./cityReducers";
import weatherReducer from "./weatherReducer";
// import temp from "./tempReducer";
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
