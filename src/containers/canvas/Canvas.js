import React, { useRef, useState, useEffect } from "react";
import "./canvas.scss";
import { useDispatch, useSelector } from "react-redux";
import moveHandler from "./helpers/moveHandler";
import clickHandler from "./helpers/clickHandler";
import { setCtx, setDraw } from "../../store/actions/canvas";
import { addFrame, updateFrame } from "../../store/actions/frameList";
import getCanvasCoordinates from "./helpers/getCanvasCoordinates";

const Canvas = () => {
  const canvasRef = useRef(null);

  const currentCanvasSize = useSelector(state => state.canvasState.size);

  const pixelSizeState = useSelector(state => state.tools.penSize);
  const toolState = useSelector(state => state.tools.tool);
  const primary = useSelector(state => state.tools.primary);

  const dispatch = useDispatch();

  const [startCoordinates, setStartCoordinates] = useState(null);

  useEffect(() => {
    dispatch(addFrame({ frame: new ImageData(currentCanvasSize, currentCanvasSize) }));
    const ctx = canvasRef.current.getContext("2d");
    dispatch(setCtx({ ctx: ctx }));
    ctx.fillStyle = primary;
  }, []);

  return (
    <div className="canvas__wrap">
      <div className="canvas__background">
        <canvas
          onContextMenu={e => e.preventDefault()}
          className="canvas"
          height={currentCanvasSize}
          width={currentCanvasSize}
          ref={canvasRef}
          onMouseDown={e => {
            const ctx = canvasRef.current.getContext("2d");
            const currentCoordinates = getCanvasCoordinates(ctx, e);
            setStartCoordinates(currentCoordinates);
            dispatch(setDraw({ draw: true }));
            ctx.fillStyle = primary;
            clickHandler({
              e,
              ctx,
              startCoordinates,
              currentCoordinates,
              toolState,
              dispatch,
              primary,
              pixelSizeState,
              currentCanvasSize
            });

            dispatch(
              updateFrame({ canvas: ctx.getImageData(0, 0, currentCanvasSize, currentCanvasSize) })
            );
          }}
          onMouseMove={e => {
            if (e.buttons !== 0) {
              const ctx = canvasRef.current.getContext("2d");
              const currentCoordinates = getCanvasCoordinates(ctx, e);
              setStartCoordinates(currentCoordinates);
              setStartCoordinates(currentCoordinates);
              dispatch(setDraw({ draw: true }));
              moveHandler({
                e,
                ctx,
                startCoordinates,
                currentCoordinates,
                toolState,
                primary,
                pixelSizeState
              });
              dispatch(
                updateFrame({
                  canvas: ctx.getImageData(0, 0, currentCanvasSize, currentCanvasSize)
                })
              );
            } else setStartCoordinates(null);
          }}
          onMouseOut={() => {
            dispatch(setDraw({ draw: false }));
          }}
          onMouseUp={() => {
            dispatch(setDraw({ draw: false }));
          }}
          onBlur={() => {}}
        />
      </div>
    </div>
  );
};

export default Canvas;
