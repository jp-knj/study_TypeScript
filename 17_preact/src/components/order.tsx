import { FunctionalComponent } from "preact";
import { css } from "goober";
import { IOrderProps } from "./type";
import { Picker } from "./picker";

export const Order: FunctionalComponent<IOrderProps> = ({
  flavorsList,
  currentFlavorIdx,
  withCone,
}) => (
  <section class={itemStyle}>
    <h2>Order</h2>
    <Picker
      flavorsList={flavorsList}
      currentFlavorIdx={currentFlavorIdx}
      onPick={(idx: number) => console.log(idx)}
    />
    <div class={actionStyle}>
      <button class={actionButtonStyle} onClick={() => console.log("Add!")}>
        Add
      </button>
      <button class={actionButtonStyle} onClick={() => console.log("Del!")}>
        Delete
      </button>
    </div>
    <div class={actionStyle}>
      <label>
        <input
          type="radio"
          name="serve"
          onClick={() => console.log("withCone ? true")}
          checked={withCone}
        />{" "}
        with Cone 🍦
      </label>
      <label>
        <input
          type="radio"
          name="serve"
          onClick={() => console.log("withCone ? false")}
          checked={!withCone}
        />{" "}
        with Cup 🍨
      </label>
    </div>
  </section>
);

const itemStyle = css({
  backgroundColor: "#fff",
  padding: "16px",
});

const actionStyle = css({
  display: "flex",
  justifyContent: "center",
  margin: "32px auto 0",
});

const actionButtonStyle = css({
  margin: "8px",
  width: "100px",
  fontSize: "1.2rem",
});
