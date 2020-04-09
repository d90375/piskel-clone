import {
  FRAME_RATE,
  FRAME_COPY,
  FRAME_ADD,
  FRAME_UPDATE,
  FRAME_REMOVE,
  FRAME_INDEX
} from "../actionTypes";

export const setFrameRate = ({ rate }) => ({
  type: FRAME_RATE,
  payload: {
    rate
  }
});

export const addFrame = ({ frame }) => ({
  type: FRAME_ADD,
  payload: {
    frame
  }
});

export const removeFrame = ({ id }) => ({
  type: FRAME_REMOVE,
  payload: { id }
});

export const updateFrame = ({ canvas }) => ({
  type: FRAME_UPDATE,
  payload: {
    canvas
  }
});

export const updateIndex = ({ id }) => ({
  type: FRAME_INDEX,
  payload: {
    id
  }
});

export const copyFrame = ({ id }) => ({
  console: console.log(id),
  type: FRAME_COPY,
  payload: {
    id
  }
});

