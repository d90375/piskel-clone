let fpsInterval;
let now;
let then;
let elapsed;

const updateAnimation = (previewCanvasRef, frameRate, frameList) => {
  const ctx = previewCanvasRef.current.getContext("2d");
  let animator = 0;

  fpsInterval = 1000 / frameRate;
  then = Date.now();

  const animate = () => {
    requestAnimationFrame(animate);
    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);
      animator = animator >= frameList.length - 1 ? 0 : animator + 1;
      ctx.putImageData(frameList[animator], 0, 0);
    }
  };

  animate();
};

export default updateAnimation;
