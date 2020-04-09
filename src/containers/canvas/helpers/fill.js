const fill = ({ ctx, currentCanvasSize }) => {
  ctx.rect(0, 0, currentCanvasSize, currentCanvasSize);
  ctx.fill();
};

export default fill;
