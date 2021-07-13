import React from "react";
import { Input } from "./Input";
import { RGBColorType } from "./type";

export const Inputs = ({ red, green, blue }: RGBColorType) => {
  return (
    <section className="color-inputs">
      <Input id="red-input" label="Red" value={red} />
      <Input id="green-input" label="Green" value={green} />
      <Input id="blue-input" label="Blue" value={blue} />
    </section>
  );
};
