import { FRAME_ADD, FRAME_REMOVE, FRAME_UPDATE, FRAME_RATE } from "../actionTypes";
import frameListReducer from "./frameList";

function testsBlock(startState) {
  it("animation frame rate", () => {
    const rate = 1;
    const frame = "frame";
    const action = { type: FRAME_RATE, payload: { rate } };
    const nextState = {
      ...startState,
      frames: [frame, frame],
      currentFrame: 1,
      rate: 1
    };
    expect(frameListReducer(startState, action)).toEqual(nextState);
  });

  it("add frame", () => {
    const frame = "frame";
    const action = { type: FRAME_ADD, payload: { frame } };
    const nextState = {
      ...startState,
      frames: [frame, frame, frame],
      currentFrame: 2,
      rate: 1
    };
    expect(frameListReducer(startState, action)).toEqual(nextState);
  });

  it("remove frame if currentFrame === frames length", () => {
    const frame = "frame";
    const id = 5;
    const action = { type: FRAME_REMOVE, payload: { id } };
    const nextState = {
      ...startState,
      frames: [frame, frame, frame],
      currentFrame: 1,
      rate: 1
    };
    expect(frameListReducer(startState, action)).toEqual(nextState);
  });

  it("remove frame if currentFrame !== frames length", () => {
    const frame = "frame";
    const id = 2;
    const action = { type: FRAME_REMOVE, payload: { id } };
    const nextState = {
      ...startState,
      frames: [frame, frame],
      currentFrame: 1,
      rate: 1
    };
    expect(frameListReducer(startState, action)).toEqual(nextState);
  });

  it("frame copy", () => {
    const frame = "frame";
    const id = 1;
    const action = { type: FRAME_ADD, payload: { id } };
    const nextState = {
      ...startState,
      frames: [frame, frame, undefined],
      currentFrame: 2,
      rate: 1
    };
    expect(frameListReducer(startState, action)).toEqual(nextState);
  });

}

describe("Reducers test", () => {
  describe("with state in reducer", () => {
    const testState = {
      frames: ["frame", "frame"],
      currentFrame: 1,
      rate: 1
    };
    testsBlock(testState);
  });
});
