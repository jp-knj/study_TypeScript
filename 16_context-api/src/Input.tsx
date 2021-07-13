import React from "react";
export interface InputProps {
  id: string;
  label: string;
  value: number;
}

export const Input = ({ id, label, value }: InputProps) => {
  return (
    <div className="color-input">
      <label htmlFor={id}>{label}</label>
      <input id={id} type="number" min="0" max="255" value={value} />
    </div>
  );
};
