import React from "react";
import "./addwindow.scss";
import { useDispatch, useSelector } from "react-redux";
import KeyboardEventHandler from "react-keyboard-event-handler";
import { addFrame } from "../../../../store/actions/frameList";

const AddWindow = () => {
  const currentCanvasSize = useSelector(state => state.canvasState.size);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addFrame({ frame: new ImageData(currentCanvasSize, currentCanvasSize) }));
  };

  return (
    <div className="frames__newWindow" onClick={handleAdd} onKeyPress={() => {}} role="button">
      <span>Add new frame</span>
      <KeyboardEventHandler handleKeys={["n"]} onKeyEvent={() => handleAdd()} />
    </div>
  );
};

export default AddWindow;
