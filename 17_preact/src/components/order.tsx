import { FunctionalComponent } from "preact";
import { css } from "goober";
import { useFlavors } from "./App";
import { IOrderProps } from "./type";
import { Picker } from "./picker";

interface IConeProps {
  setWithCone: boolean;
}

type ConeAndOrderProps = IConeProps & IOrderProps;
export const Order: FunctionalComponent<ConeAndOrderProps> = ({
  flavorsList,
  currentFlavorIdx,
  setCurrentFlavorIdx,
  withCone,
  setWithCone,
}) => {
  const { addFlavor, deleteFlavor } = useFlavors(currentFlavorIdx);
  return (
    <section class={itemStyle}>
      <h2>Order</h2>
      <Picker
        flavorsList={flavorsList}
        currentFlavorIdx={currentFlavorIdx}
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
