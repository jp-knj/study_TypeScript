import React from "react";
import { RGBContext } from "./context";
import { RGBColorType } from "./type";

export const Swatch = () => {
  const { red, green, blue } = React.useContext(RGBContext);
  return (
    <div
      className="color-swatch"
      style={{
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
      }}
    ></div>
  );
};
