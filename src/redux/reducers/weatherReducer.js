import { WEATHER } from "../actions/types";
import initialState from "./initialState";

export default function weatherReducer(state = {}, action) {
  switch (action.type) {
    case `${WEATHER}`: {
      return Object.assign({}, state, {
        weatherObj: action.payload,
      });
    }
    default:
      return state;
  }
}
