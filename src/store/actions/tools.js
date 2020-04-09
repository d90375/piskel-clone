import { SET_TOOL, SET_PEN_SIZE, SET_PRIMARY, SET_SECONDARY } from "../actionTypes";

export const setTool = ({ tool }) => ({
  type: SET_TOOL,
  payload: {
    tool
  }
});

export const setPenSize = ({ penSize }) => ({
  type: SET_PEN_SIZE,
  payload: {
    penSize
  }
});

export const setPrimary = ({ primary }) => ({
  type: SET_PRIMARY,
  payload: {
    primary
  }
});

export const setSecondary = ({ secondary }) => ({
  type: SET_SECONDARY,
  payload: {
    secondary
  }
});

