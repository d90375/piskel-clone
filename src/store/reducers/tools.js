import { COLOR_PRIMARY, COLOR_SECONDARY, TOOL_NAMES, TOOL_SIZES } from "../../CONSTANTS";
import { SET_PEN_SIZE, SET_PRIMARY, SET_SECONDARY, SET_TOOL } from "../actionTypes";

const initialState = {
  tool: TOOL_NAMES.pen,
  penSize: TOOL_SIZES[0],
  primary: COLOR_PRIMARY,
  secondary: COLOR_SECONDARY
};

const toolReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOOL:
      return {
        ...state,
        tool: action.payload.tool
      };
    case SET_PEN_SIZE:
      return {
        ...state,
        penSize: action.payload.penSize
      };
    case SET_PRIMARY:
      return {
        ...state,
        primary: action.payload.primary
      };
    case SET_SECONDARY:
      return {
        ...state,
        secondary: action.payload.secondary
      };
    default:
      return state;
  }
};

export default toolReducer;
