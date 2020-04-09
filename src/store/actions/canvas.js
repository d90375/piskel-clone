import { SET_CTX, SET_DRAW, SET_CANVAS_SIZE } from "../actionTypes";

export const setCtx = ({ ctx }) => ({
  type: SET_CTX,
  payload: {
    ctx
  }
});

export const setDraw = ({ draw }) => ({
  type: SET_DRAW,
  payload: {
    draw
  }
});

export const setCanvasSize = ({ size }) => ({
  type: SET_CANVAS_SIZE,
  payload: {
    size
  }
});
