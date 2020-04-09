import logReducer from "./authentication";
import { LOGGED_IN, LOGGED_OUT } from "../actionTypes";

function testsBlock(startState) {
  it("login test", () => {
    const logIn = true;
    const action = { type: LOGGED_IN, payload: { logIn } };
    const nextState = {
      ...startState,
      logIn: true,
      logOut: true,
      obj: {}
    };
    expect(logReducer(startState, action)).toEqual(nextState);
  });

  it("logout test", () => {
    const logOut = false;
    const action = { type: LOGGED_OUT, payload: { logOut } };
    const nextState = {
      ...startState,
      logIn: false,
      logOut: false,
      obj: {}
    };
    expect(logReducer(startState, action)).toEqual(nextState);
  });
}

describe("Reducers tool test", () => {
  describe("with state in reducer", () => {
    const testState = {
      logIn: false,
      logOut: true,
      obj: {}
    };
    testsBlock(testState);
  });

  describe("without state in reducer", () => {
    const testState = undefined;
    testsBlock(testState);
  });
});
