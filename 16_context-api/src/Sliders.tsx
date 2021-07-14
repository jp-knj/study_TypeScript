import React, { Dispatch, useContext } from "react";

import { Slider } from "./Slider";
import { AdjustmentAction } from "./reducer";
import { RGBColorType } from "./type";
import { RGBContext } from "./context";

interface ColorSidersProps extends RGBColorType {
  dispatch: Dispatch<AdjustmentAction>;
}

export const Sliders = () => {
  const { red, green, blue, dispatch } = useContext<ColorSidersProps>(
    RGBContext
  );
  const adjustRed = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "ADJUST_RED", payload: +event.target.value });
  };

  const adjustGreen = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "ADJUST_GREEN", payload: +event.target.value });
  };

  const adjustBlue = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "ADJUST_BLUE", payload: +event.target.value });
  };

  return (
    <section className="color-sliders">
      <Slider id="red-slider" label="Red" value={red} onChange={adjustRed} />
      <Slider
        id="green-slider"
        label="Green"
        value={green}
        onChange={adjustGreen}
      />
      <Slider
        id="blue-slider"
        label="Blue"
        value={blue}
        onChange={adjustBlue}
      />
    </section>
  );
};
