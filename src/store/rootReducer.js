import { combineReducers } from "redux";
import toolReducer from "./reducers/tools";
import canvasReducer from "./reducers/canvas";
import frameListReducer from "./reducers/frameList";
import logReducer from "./reducers/authentication";

export default combineReducers({
  log: logReducer,
  frameList: frameListReducer,
  canvasState: canvasReducer,
  tools: toolReducer
});
