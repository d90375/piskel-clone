import React from "react";
import * as PropTypes from "prop-types";
import "./copy.scss";
import { useDispatch } from "react-redux";
import { copyFrame } from "../../../../store/actions/frameList";

const Copy = ({ index }) => {
  const dispatch = useDispatch();

  const handleCopy = () => {
    dispatch(copyFrame({ id: index }));
  };
  return (
    <div
      className="frames__copy"
      role="button"
      onClick={handleCopy}
      onKeyDown={handleCopy}
    />
  );
};

Copy.propTypes = {
  index: PropTypes.number.isRequired
};

export default Copy;
