const getCanvasCoordinates = (ctx, e) => {
  const x = Math.floor(
    (e.clientX - ctx.canvas.getBoundingClientRect().left) /
      (ctx.canvas.clientWidth / ctx.canvas.width)
  );
  const y = Math.floor(
    (e.clientY - ctx.canvas.getBoundingClientRect().top) /
      (ctx.canvas.clientHeight / ctx.canvas.height)
  );

  return { x: x, y: y };
};

export default getCanvasCoordinates;
