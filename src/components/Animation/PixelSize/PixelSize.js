import React from "react";
import "./pixelSize.scss";
import { CANVAS_SIZE, PIXEL_SIZE } from "../../../CONSTANTS";
import Button from "./Button";

const PixelSize = () => {
  const arr = [];

  for (let i = PIXEL_SIZE; i < CANVAS_SIZE; i += i) {
    arr.push(i);
    arr.push((i += i));
  }

  const sizeList = arr.map(e => <Button key={e} pixelSize={e} />);

  return (
    <div className="animations__pixelSize">
      <div className="pixelSize__title">Screen resolution</div>
      <div className="pixelSize__menu">{sizeList}</div>
    </div>
  );
};

export default PixelSize;
