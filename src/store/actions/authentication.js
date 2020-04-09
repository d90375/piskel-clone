import { LOGGED_IN, LOGGED_OUT } from "../actionTypes";

export const setLogin = ({ logIn }) => ({
  type: LOGGED_IN,
  payload: {
    logIn
  }
});

export const setLogout = ({ logOut }) => ({
  type: LOGGED_OUT,
  payload: {
    logOut
  }
});

export const setUserRules = ({ obj }) => ({
  type: "USER_RULES",
  payload: {
    obj
  }
});
