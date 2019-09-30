import {
  LOAD_FB_SUCCESS,
  LOADING_ON,
  LOADING_OFF
} from "./action-types";
import { chunk } from "lodash";

function rootReducer(
  state = {
    fbposts: [],
    loading: true
  },
  action
) {
  if (action.type === LOAD_FB_SUCCESS) {
    const payload = action.payload.map(x => ({
      id: x.id,
      timestamp: x.timestamp
    }));
    return {
      ...state,
      fbposts: chunk(payload, 5)
    };
  } else if (action.type === LOADING_OFF) {
    return {
      ...state,
      loading: false
    };
  } else if (action.type === LOADING_ON) {
    return {
      ...state,
      loading: true
    };
  }
  return state;
}
export default rootReducer;
