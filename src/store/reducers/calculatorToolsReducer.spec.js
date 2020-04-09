import { SET_PEN_SIZE, SET_PRIMARY, SET_SECONDARY, SET_TOOL } from "../actionTypes";
import toolReducer from "./tools";

function testsBlock(startState) {
  it("set tool", () => {
    const tool = "bucket";
    const action = { type: SET_TOOL, payload: { tool } };
    const nextState = {
      ...startState,
      tool: "bucket",
      penSize: 1,
      primary: "#FFD700",
      secondary: "#FFFFFF"
    };
    expect(toolReducer(startState, action)).toEqual(nextState);
  });

  it("set pen size", () => {
    const penSize = 2;
    const action = { type: SET_PEN_SIZE, payload: { penSize } };
    const nextState = {
      ...startState,
      tool: "pen",
      penSize: 2,
      primary: "#FFD700",
      secondary: "#FFFFFF"
    };
    expect(toolReducer(startState, action)).toEqual(nextState);
  });

  it("set color primary", () => {
    const primary = "black";
    const action = { type: SET_PRIMARY, payload: { primary } };
    const nextState = {
      ...startState,
      tool: "pen",
      penSize: 1,
      primary: "black",
      secondary: "#FFFFFF"
    };
    expect(toolReducer(startState, action)).toEqual(nextState);
  });

  it("set color secondary", () => {
    const secondary = "red";
    const action = { type: SET_SECONDARY, payload: { secondary } };
    const nextState = {
      ...startState,
      tool: "pen",
      penSize: 1,
      primary: "#FFD700",
      secondary: "red"
    };
    expect(toolReducer(startState, action)).toEqual(nextState);
  });
}

describe("Reducers tool test", () => {
  describe("with state in reducer", () => {
    const testState = {
      tool: "pen",
      penSize: 1,
      primary: "#FFD700",
      secondary: "#FFFFFF"
    };
    testsBlock(testState);
  });

  describe("without state in reducer", () => {
    const testState = undefined;
    testsBlock(testState);
  });
});
