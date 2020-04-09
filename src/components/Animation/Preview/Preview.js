import React, { useEffect, useRef, useState } from "react";
import "./preview.scss";
import { useSelector } from "react-redux";
import updateAnimation from "./helpers/updateAnimation";
import Bar from "./Bar";

const Preview = () => {
  const currentCanvasSize = useSelector(state => state.canvasState.size);

  const [display, setDisplay] = useState(true);
  const frameList = useSelector(state => state.frameList.frames);
  const frameRate = useSelector(state => state.frameList.rate);
  const previewCanvasRef = useRef(null);

  const handleFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    previewCanvasRef.current.requestFullscreen();
  };
  useEffect(() => {
    updateAnimation(previewCanvasRef, frameRate, frameList);
  }, [frameList, frameRate]);

  return (
    <div className="preview">
      <div
        className="preview__window"
        onMouseEnter={() => {
          setDisplay(true);
        }}
        onMouseLeave={() => {
          setDisplay(false);
        }}
      >
        <canvas
          className="preview__canvas"
          width={currentCanvasSize}
          height={currentCanvasSize}
          ref={previewCanvasRef}
        />
        {display && (
          <div
            className="preview__fullScreen"
            onClick={handleFullScreen}
            role="button"
            onKeyDown={handleFullScreen}
            tabIndex="0"
          />
        )}
      </div>
      <div className="preview__range">
        <Bar frameRate={frameRate} />
      </div>
    </div>
  );
};

export default Preview;
