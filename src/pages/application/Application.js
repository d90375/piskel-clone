import React from "react";
import "./application.scss";
import Canvas from "../../containers/canvas/Canvas";
import Tools from "../../components/Tools/Tools";
import Frame from "../../containers/Frame";
import Animation from "../../components/Animation";

const Application = () => {
  return (
    <div className="application__wrap">
      <Tools />
      <Frame />
      <Canvas />
      <Animation />
    </div>
  );
};

export default Application;
