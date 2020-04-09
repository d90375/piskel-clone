import React from "react";
import "./button.scss";
import * as PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setCanvasSize } from "../../../../store/actions/canvas";

const Button = ({ pixelSize }) => {
  const currentCanvasSize = useSelector(state => state.canvasState.size);

  const dispatch = useDispatch();
  const pixelSizeContainerBorder = pixelSize === currentCanvasSize ? "active" : "";

  const handlePixelSize = () => {
    dispatch(setCanvasSize({ size: pixelSize }));
  };

  const handlePixelSizeKey = e => {
    dispatch(setCanvasSize({ size: pixelSize }));
  };
  return (
    <div
      className={`pixelSize__btn pixelSize__btn--canvas${pixelSize}px ${pixelSizeContainerBorder}`}
      onClick={handlePixelSize}
      onKeyDown={handlePixelSizeKey}
      role="button"
      tabIndex="0"
    >
      {pixelSize} x {pixelSize}
    </div>
  );
};

Button.defaultProps = {
  pixelSize: 4
};

Button.propTypes = {
  pixelSize: PropTypes.number
};

export default Button;
