import React from "react";
import "./button.scss";
import * as PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setTool } from "../../../store/actions/tools";

const Button = ({ tool }) => {
  const currentTool = useSelector(state => state.tools.tool);
  const dispatch = useDispatch();

  const toolBorder = currentTool === tool ? "active" : "";

  return (
    <button
      type="button"
      className={`tools__btn tools__${tool}Btn ${toolBorder}`}
      onClick={() => {
        dispatch(setTool({ tool: tool }));
      }}
      onKeyDown={e => {
        // if (e.code === "KeyP") {
        //   dispatch(setTool({ tool: tool }));
        // }
      }}
    />
  );
};

Button.propTypes = {
  tool: PropTypes.string.isRequired
};

export default Button;
