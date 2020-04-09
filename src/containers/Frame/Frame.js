import React from "react";
import "./frame.scss";
import { useSelector } from "react-redux";
import AddWindow from "./Window/AddWindow";
import Window from "./Window";

const Frame = () => {
  const { frames } = useSelector(state => state.frameList);

  return (
    <div className="frames">
      {frames.map((e, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Window index={i} data={e} key={i} />
      ))}
      <AddWindow />
    </div>
  );
};

export default Frame;
