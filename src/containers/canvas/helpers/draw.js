const draw = ({ ctx, currentCoordinates, startCoordinates, toolState, pixelSizeState }, pen) => {
  const x0 = Math.floor(currentCoordinates.x / pixelSizeState);
  const y0 = Math.floor(currentCoordinates.y / pixelSizeState);

  const startCoordinatesX = startCoordinates && startCoordinates.x;
  const startCoordinatesY = startCoordinates && startCoordinates.y;

  const x1 = Math.floor((startCoordinatesX || currentCoordinates.x) / pixelSizeState);
  const y1 = Math.floor((startCoordinatesY || currentCoordinates.y) / pixelSizeState);

  let x0copy = x0;
  let y0copy = y0;

  const deltaX = Math.abs(x1 - x0);
  const deltaY = Math.abs(y1 - y0);

  const sx = x0 < x1 ? 1 : -1;
  const sy = y0 < y1 ? 1 : -1;

  let difference = deltaX - deltaY;

  let sizeDifference = Math.ceil(pixelSizeState / 2 - pixelSizeState / 2);
  sizeDifference += sizeDifference % pixelSizeState;

  do {
    if (pen) {
      ctx.fillRect(
        x0copy * pixelSizeState - sizeDifference,
        y0copy * pixelSizeState - sizeDifference,
        pixelSizeState,
        pixelSizeState
      );
    } else {
      ctx.clearRect(
        x0copy * pixelSizeState - sizeDifference,
        y0copy * pixelSizeState - sizeDifference,
        pixelSizeState,
        pixelSizeState
      );
    }
    const e2 = difference * 2;

    if (e2 > -deltaX) {
      difference -= deltaY;
      x0copy += sx;
    }

    if (e2 < deltaY) {
      difference += deltaX;
      y0copy += sy;
    }
  } while (!(x0copy === x1 && y0copy === y1));
};

export default draw;
