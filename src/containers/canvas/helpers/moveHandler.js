import { TOOL_NAMES } from "../../../CONSTANTS";
import draw from "./draw";

const moveHandler = ({
  e,
  ctx,
  startCoordinates,
  currentCoordinates,
  toolState,
  pixelSizeState
}) => {
  switch (toolState) {
    case TOOL_NAMES.pen:
      draw({ e, ctx, startCoordinates, currentCoordinates, toolState, pixelSizeState }, true);
      break;
    case TOOL_NAMES.eraser:
      draw({ e, ctx, startCoordinates, currentCoordinates, toolState, pixelSizeState });
      break;
    case TOOL_NAMES.stroke:
      break;
    case TOOL_NAMES.bucketAll:
      break;
    case TOOL_NAMES.bucket:
      break;
    default:
      break
  }
};

export default moveHandler;
