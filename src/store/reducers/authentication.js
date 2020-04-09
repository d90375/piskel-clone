import { LOGGED_IN, LOGGED_OUT } from "../actionTypes";

const initialState = {
  logIn: false,
  logOut: true,
  obj: {}
};

const logReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        logIn: action.payload.logIn
      };
    case LOGGED_OUT:
      return {
        ...state,
        logOut: action.payload.logOut
      };
    case "USER_RULES":
      return {
        ...state,
        obj: action.payload.obj
      };
    default:
      return state;
  }
};

export default logReducer;
