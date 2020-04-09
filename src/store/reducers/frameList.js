import {
  FRAME_RATE,
  FRAME_ADD,
  FRAME_UPDATE,
  FRAME_COPY,
  FRAME_REMOVE,
  FRAME_INDEX
} from "../actionTypes";

export const initialState = {
  frames: [],
  currentFrame: 0,
  rate: 1
};

const frameListReducer = (state = initialState, action) => {
  const shallowState = { ...state };

  switch (action.type) {
    case FRAME_RATE: {
      return { ...state, rate: action.payload.rate };
    }

    case FRAME_ADD: {
      shallowState.frames.push(action.payload.frame);
      shallowState.currentFrame = shallowState.frames.length - 1;
      return shallowState;
    }

    case FRAME_REMOVE: {
      shallowState.frames.splice(action.payload.id, 1);
      if (shallowState.currentFrame === shallowState.frames.length) {
        shallowState.currentFrame -= 1;
      }
      return shallowState;
    }

    case FRAME_UPDATE: {
      if (shallowState.currentFrame === shallowState.frames.length) {
        shallowState.currentFrame -= 1;
      }
      shallowState.frames[shallowState.currentFrame] = action.payload.canvas;
      return shallowState;
    }

    case FRAME_COPY: {
      shallowState.frames.splice(action.payload.id, 0, shallowState.frames[action.payload.id]);
      if (shallowState.currentFrame >= action.payload.id) shallowState.currentFrame += 1;
      return shallowState;
    }

    case FRAME_INDEX:
      return { ...state, currentFrame: action.payload.id };

    default:
      return state;
  }
};

export default frameListReducer;
