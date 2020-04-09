import { convertRgbToHex } from "../../../utils/utils";
import { setPrimary } from "../../../store/actions/tools";

const getColor = (ctx, currentCoordinates) => {
  const { x, y } = currentCoordinates;
  const pixelColor = ctx.getImageData(x, y, 1, 1);
  const rgb = Array.from(pixelColor.data);
  return convertRgbToHex(rgb);
};

const colorPicker = ({ e, ctx, currentCoordinates, dispatch }) => {
  if (e.buttons === 1 || e.buttons === 2)
    dispatch(setPrimary({ primary: getColor(ctx, currentCoordinates) }));
};

export default colorPicker;
