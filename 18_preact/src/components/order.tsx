import { FunctionalComponent, h } from "preact";
import { css } from "goober";

import { Picker } from "./picker.jsx";
import { useFlavor } from "./App.jsx";

interface OrderProps {
  flavorsList: Array<string>;
  currentFlavorIdx: number;
  setCurrentFlavorIdx: number;
  withCone: boolean;
  setWithCone: boolean;
}
export const Order: FunctionalComponent<OrderProps> = ({
  flavorsList,
  currentFlavorIdx,
  withCone,
  setCurrentFlavorIdx,
  setWithCone,
}) => {
  const { addFlavor, deleteFlavor } = useFlavor(currentFlavorIdx);
  return (
    <section class={itemStyle}>
      <h2>Order</h2>
      <Picker
        flavors={flavorsList}
        currentIdx={currentFlavorIdx}
        onPick={(idx: number) => setCurrentFlavorIdx}
      />
      <div class={actionStyle}>
        <button class={actionButtonStyle} onClick={addFlavor}>
          Add
        </button>
        <button class={actionButtonStyle} onClick={deleteFlavor}>
          Delete
        </button>
      </div>
      <div class={actionStyle}>
        <label>
          <input
            type="radio"
            name="serve"
            onClick={() => setWithCone}
            checked={withCone}
          />{" "}
          with Cone 🍦
        </label>
        <label>
          <input
            type="radio"
            name="serve"
            onClick={() => setWithCone}
            checked={!withCone}
          />{" "}
          with Cup 🍨
        </label>
      </div>
    </section>
  );
};

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
