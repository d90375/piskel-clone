import React from "react";
import Button from "./Button/Button";
import "./tools.scss";
import { TOOL_NAMES, TOOL_SIZES } from "../../CONSTANTS";
import SizeSelector from "./SizeSelector";
import ColorSelector from "./ColorSelector/ColorSelector";

const Tools = () => {
  return (
    <div className="tools">
      <div className="tools__sizes">
        {Object.values(TOOL_SIZES).map(e => (
          <SizeSelector key={e} size={e} />
        ))}
      </div>
      <div className="tools__buttons">
        {Object.values(TOOL_NAMES).map(e => (
          <Button key={e} tool={e} />
        ))}
      </div>
      <ColorSelector />
    </div>
  );
};

export default Tools;
