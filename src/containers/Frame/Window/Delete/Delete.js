import React from "react";
import "./delete.scss";
import * as PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { removeFrame } from "../../../../store/actions/frameList";

const Delete = ({ index, currentFrame }) => {
  const currentCanvasSize = useSelector(state => state.canvasState.size);
  const ctxState = useSelector(state => state.canvasState.ctx);
  const dispatch = useDispatch();

  const handleDel = () => {
    ctxState.clearRect(0, 0, currentCanvasSize, currentCanvasSize);
    dispatch(removeFrame({ id: index }));
  };

  return (
    <div
      className="frames__delete"
      onClick={handleDel}
      onKeyPress={() => {}}
      role="button"
      tabIndex="0"
    />
  );
};

Delete.propTypes = {
  index: PropTypes.number.isRequired,
  currentFrame: PropTypes.number.isRequired
};

export default Delete;
