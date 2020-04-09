import React, { useRef, useEffect, useState } from "react";
import "./window.scss";
import * as PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import KeyboardEventHandler from "react-keyboard-event-handler";
import Delete from "./Delete";
import Copy from "./Copy";
import Move from "./Move/Move";
import { removeFrame, updateIndex } from "../../../store/actions/frameList";

const Window = ({ data, index }) => {
  const frameCanvasRef = useRef(null);
  const [showAdditional, setShowAdditional] = useState(false);

  const ctxState = useSelector(state => state.canvasState.ctx);
  const currentCanvasSize = useSelector(state => state.canvasState.size);

  const frameList = useSelector(state => state.frameList.frames);
  const currentFrame = useSelector(state => state.frameList.currentFrame);

  const dispatch = useDispatch();

  useEffect(() => {
    const ctx = frameCanvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, currentCanvasSize, currentCanvasSize);
    ctx.putImageData(data, 0, 0);
  },  [data]);

  useEffect(() => {
    if (currentFrame === index) {
      ctxState.clearRect(0, 0, currentCanvasSize, currentCanvasSize);
      ctxState.drawImage(frameCanvasRef.current, 0, 0);
    }
  }, [frameList.length, currentFrame, ctxState, index]);

  const handleShow = () => {
    setShowAdditional(true);
  };

  const handleHide = () => {
    setShowAdditional(false);
  };

  const handleKeyDel = () => {
    if (frameList.length > 1) {
      ctxState.clearRect(0, 0, currentCanvasSize, currentCanvasSize);
      dispatch(removeFrame({ id: currentFrame }));
    }
  };

  return (
    <div
      className={`frames__window ${currentFrame === index ? "active" : ""}`}
      role="button"
      onMouseEnter={handleShow}
      onMouseLeave={handleHide}
      onClick={() => dispatch(updateIndex({ id: index }))}
      onKeyDown={() => {}}
    >
      <span className="frames__number">{index + 1}</span>
      {frameList.length > 1 && showAdditional && (
        <Delete index={index} currentFrame={currentFrame} />
      )}
      {showAdditional && <Move />}
      {showAdditional && <Copy index={index} />}
      <canvas
        className="frames__canvas"
        width={currentCanvasSize}
        height={currentCanvasSize}
        ref={frameCanvasRef}
      />
      <KeyboardEventHandler
        handleKeys={["delete"]}
        onKeyEvent={() => {
          handleKeyDel();
        }}
      />
    </div>
  );
};

Window.propTypes = {
  data: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    Uint8ClampedArray: PropTypes.array
  }).isRequired,
  index: PropTypes.number.isRequired
};

export default Window;


