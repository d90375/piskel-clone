import React from "react";
import * as PropTypes from "prop-types";
import "./bar.scss";
import { useDispatch } from "react-redux";
import { setFrameRate } from "../../../../store/actions/frameList";

const Bar = ({ frameRate }) => {
  const dispatch = useDispatch();
  return (
    <>
      <span className="preview__range_display">{frameRate}</span>
      <button
        type="button"
        className="preview__stop"
      />
      <input
        className="preview__range_fps"
        type="range"
        min="1"
        max="24"
        value={frameRate}
        onChange={e => dispatch(setFrameRate({ rate: +e.target.value }))}
      />
    </>
  );
};

Bar.defaultProps = {
  frameRate: 1,
  setStopAnimation: false
};

Bar.propTypes = {
  frameRate: PropTypes.number,
  setStopAnimation: PropTypes.bool
};

export default Bar;
