import { FunctionalComponent } from "preact";
import { css } from "goober";
import { IOrderProps } from "./type";

export const Picker: FunctionalComponent<IOrderProps> = ({
  flavorsList,
  currentFlavorIdx,
  setCurrentFlavorIdx,
  onPick,
}) => (
  <div class={pickerWrapStyle}>
    {flavorsList.map((f, idx) => (
      <div
        key={f}
        class={pickerStyle(idx === currentFlavorIdx)}
        style={{ backgroundColor: f }}
        onClick={() => onPick(idx)}
      />
    ))}
  </div>
);

const pickerWrapStyle = css({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  margin: "32px auto",
});

const pickerStyle = (props: boolean) =>
  css({
    width: "80px",
    height: "80px",
    boxSizing: "border-box",
    border: props ? "4px dashed hotpink" : "none",
  });
