import React from "react";
import { RGBContext } from "./context";

export interface AdjustmentInputProps {
  id: string;
  label: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface AdjustmentProps {
  Adjustment: React.ComponentType<AdjustmentInputProps>;
}

export const Sliders = ({ Adjustment }: AdjustmentProps) => {
  const { red, green, blue, dispatch } = React.useContext(RGBContext);
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
      <Adjustment
        id="red-slider"
        label="Red"
        value={red}
        onChange={adjustRed}
      />
      <Adjustment
        id="green-slider"
        label="Green"
        value={green}
        onChange={adjustGreen}
      />
      <Adjustment
        id="blue-slider"
        label="Blue"
        value={blue}
        onChange={adjustBlue}
      />
    </section>
  );
};
