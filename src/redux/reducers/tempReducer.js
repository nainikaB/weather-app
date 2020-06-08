import { TEMP } from "../actions/types";
import initialState from "./initialState";

export default function cityReducers(state = initialState.temp, action) {
  switch (action.type) {
    case `${TEMP}`: {
      return Object.assign({}, state, {
        temp: action.temp,
      });
    }
    default:
      return state;
  }
}
