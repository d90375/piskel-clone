import { TOOL_NAMES } from "../../../CONSTANTS";
import draw from "./draw";
import fillAll from "./fillAll";
import colorPicker from "./colorPicker";
import fill from "./fill";

const clickHandler = ({
  e,
  ctx,
  startCoordinates,
  currentCoordinates,
  toolState,
  dispatch,
  primary,
  pixelSizeState,
                        currentCanvasSize
}) => {
  switch (toolState) {
    case TOOL_NAMES.pen:
      draw({ e, ctx, startCoordinates, currentCoordinates, toolState, pixelSizeState }, true);
      break;
    case TOOL_NAMES.eraser:
      draw({ e, ctx, startCoordinates, currentCoordinates, toolState, pixelSizeState });
      break;
    case TOOL_NAMES.bucket:
      fill({ ctx, currentCanvasSize });
      break;
    case TOOL_NAMES.bucketAll:
      fillAll({ ctx, currentCoordinates, primary, currentCanvasSize });
      break;
    case TOOL_NAMES.colorPicker:
      colorPicker({ e, ctx, currentCoordinates, dispatch });
      break;
    case TOOL_NAMES.stroke:
      break;
    default:
      break;
  }
};

export default clickHandler;
