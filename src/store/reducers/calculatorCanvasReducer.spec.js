import { SET_CANVAS_SIZE, SET_DRAW } from "../actionTypes";
import canvasReducer from "./canvas";

function testsBlock(startState) {
  it("set draw", () => {
    const draw = true;
    const action = { type: SET_DRAW, payload: { draw } };
    const nextState = {
      ...startState,
      ctx: null,
      draw: true,
      size: 512
    };
    expect(canvasReducer(startState, action)).toEqual(nextState);
  });

  it("canvas size", () => {
    const size = 128;
    const action = { type: SET_CANVAS_SIZE, payload: { size } };
    const nextState = {
      ...startState,
      ctx: null,
      draw: false,
      size: 128
    };
    expect(canvasReducer(startState, action)).toEqual(nextState);
  });
}

describe("Reducers canvas test", () => {
  describe("with state in reducer", () => {
    const testState = {
      ctx: null,
      draw: false,
      size: 512
    };
    testsBlock(testState);
  });

  describe("without state in reducer", () => {
    const testState = undefined;
    testsBlock(testState);
  });
});
