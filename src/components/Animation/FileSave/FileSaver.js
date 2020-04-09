import React from "react";
import "./filesave.scss";
import { useSelector } from "react-redux";
import saveAs from "file-saver";
import { getEncodePNG, getEncodeGIF } from "./helpers/getEncode";

const FileSaver = () => {
  const frameList = useSelector(state => state.frameList.frames);
  const frameRate = useSelector(state => state.frameList.rate);
  const currentCanvasSize = useSelector(state => state.canvasState.size);

  const handleGIF = () => {
    saveAs(getEncodeGIF(frameList, frameRate, currentCanvasSize), `${new Date().getTime()}.gif`);
  };

  const handlePNG = () => {
    saveAs(getEncodePNG(frameList, frameRate, currentCanvasSize), `${new Date().getTime()}.png`);
  };

  return (
    <div className="animations__fileSaver">
      <div className="fileSaver__title">Save</div>
      <div className="fileSaver__menu">
        <div
          role="button"
          className="fileSaver__btn fileSaver__btnPNG"
          onClick={handlePNG}
          onKeyDown={handlePNG}
        >
          apng
        </div>
        <div
          role="button"
          className="fileSaver__btn fileSaver__btnGIF"
          onClick={handleGIF}
          onKeyDown={handleGIF}
        >
          gif
        </div>
      </div>
    </div>
  );
};

export default FileSaver;
