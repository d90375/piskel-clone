import { CANVAS_SIZE } from "../../CONSTANTS";
import { SET_CTX, SET_DRAW, SET_CANVAS_SIZE } from "../actionTypes";

const initialState = {
  ctx: null,
  draw: false,
  size: CANVAS_SIZE
};

const canvasReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CTX:
      return {
        ...state,
        ctx: action.payload.ctx
      };
    case SET_DRAW:
      return {
        ...state,
        draw: action.payload.draw
      };
    case SET_CANVAS_SIZE:
      return {
        ...state,
        size: action.payload.size
      };
    default:
      return state;
  }
};

export default canvasReducer;
