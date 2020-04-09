import React, { useState } from "react";
import "./colorSelector.scss";
import { SketchPicker } from "react-color";
import { useDispatch, useSelector } from "react-redux";
import { setSecondary, setPrimary } from "../../../store/actions/tools";

const ColorSelector = () => {
  const primary = useSelector(state => state.tools.primary);
  const secondary = useSelector(state => state.tools.secondary);
  const dispatch = useDispatch();

  const [displayColorClickerPrimary, setDisplayColorClickerPrimary] = useState(false);
  const [displayColorClickerSecondary, setDisplayColorClickerSecondary] = useState(false);

  return (
    <div className="tools__colors">
      <div
        role="button"
        onClick={() => setDisplayColorClickerPrimary(!displayColorClickerPrimary)}
        onKeyDown={() => setDisplayColorClickerPrimary(!displayColorClickerPrimary)}
        className="colors__item colors__item--primary"
        style={{ background: primary }}
      >
        {displayColorClickerPrimary && (
          <>
            <div
              role="button"
              onClick={() => setDisplayColorClickerPrimary(false)}
              onKeyDown={() => setDisplayColorClickerPrimary(false)}
            />
            <SketchPicker
              className="colors__input"
              color={primary}
              onChange={e => {
                dispatch(setPrimary({ primary: e.hex }));
              }}
            />
          </>
        )}
      </div>
      <div
        role="button"
        onClick={() => setDisplayColorClickerSecondary(!displayColorClickerSecondary)}
        onKeyDown={() => setDisplayColorClickerSecondary(!displayColorClickerSecondary)}
        className="colors__item colors__item--secondary"
        style={{ background: secondary }}
      >
        {displayColorClickerSecondary && (
          <>
            <div
              role="button"
              onClick={() => setDisplayColorClickerSecondary(false)}
              onKeyDown={() => setDisplayColorClickerSecondary(false)}
            />
            <SketchPicker
              className="colors__input"
              color={primary}
              onChange={e => {
                dispatch(setSecondary({ secondary: e.hex }));
              }}
            />
          </>
        )}
      </div>
      <div
        role="button"
        className="colors__arrow"
        onClick={() => {
          dispatch(setPrimary({ primary: secondary }));
          dispatch(setSecondary({ secondary: primary }));
        }}
        onKeyDown={() => {
          dispatch(setPrimary({ primary: secondary }));
          dispatch(setSecondary({ secondary: primary }));
        }}
      />
    </div>
  );
};
export default ColorSelector;
