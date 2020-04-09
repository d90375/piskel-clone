import { convertHexToRGB } from "../../../utils/utils";

const matchChecker = (imageData, getClickedColorPoint, i) => {
  return (
    imageData.data[i] === getClickedColorPoint[0] &&
    imageData.data[i + 1] === getClickedColorPoint[1] &&
    imageData.data[i + 2] === getClickedColorPoint[2] &&
    imageData.data[i + 3] === getClickedColorPoint[3]
  );
};

export default function applyBucketAll({ ctx, currentCoordinates, primary, currentCanvasSize }) {
  const primaryRGB = convertHexToRGB(primary);
  const { x, y } = currentCoordinates;
  const imageData = ctx.getImageData(0, 0, currentCanvasSize, currentCanvasSize);
  const getClickedColorPoint = ctx.getImageData(x, y, 1, 1).data;

  for (let i = 0; i <= imageData.data.length; i += 4) {
    if (matchChecker(imageData, getClickedColorPoint, i)) {
      imageData.data[i] = primaryRGB[0];
      imageData.data[i + 1] = primaryRGB[1];
      imageData.data[i + 2] = primaryRGB[2];
      imageData.data[i + 3] = 255;
    }
  }
  ctx.putImageData(imageData, 0, 0);
}
