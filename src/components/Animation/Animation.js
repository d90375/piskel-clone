import React from "react";
import "./animation.scss";
import PixelSize from "./PixelSize";
import FileSaver from "./FileSave";
import Preview from "./Preview";

const Animation = () => {
  return (
    <div className="animations">
      <Preview />
      <PixelSize />
      <FileSaver />
    </div>
  );
};

export default Animation;
