import React from "react";
import { RGBColorType } from "./type";

export const Swatch = ({ red, green, blue }: RGBColorType) => {
  return (
    <div
      className="color-swatch"
      style={{
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
      }}
    ></div>
  );
};
