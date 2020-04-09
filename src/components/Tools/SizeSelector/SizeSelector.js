import React from "react";
import "./sizeSelector.scss";
import * as PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setPenSize } from "../../../store/actions/tools";

const SizeSelector = ({ size }) => {
  const currentSize = useSelector(state => state.tools);
  const dispatch = useDispatch();
  const sizeBorder = currentSize.penSize === size ? "active" : "";
  return (
    <div
      role="button"
      className={`tools__sizeItem sizes__sizeItem--${size} ${sizeBorder}`}
      onClick={() => {
        dispatch(setPenSize({ penSize: size }));
      }}
      onKeyDown={() => {
        dispatch(setPenSize({ penSize: size }));
      }}
    />
  );
};

SizeSelector.propTypes = {
  size: PropTypes.number.isRequired
};

export default SizeSelector;
