import { useState } from "preact/hooks";
import { css } from "goober";

const flavorsList = [
  "mintcream",
  "lemonchiffon",
  "wheat",
  "plum",
  "lime",
  "skyblue",
  "tomato",
  "green",
  "chocolate",
  "maroon",
];
export const App = () => {
  const [currentFlavorIdx] = useState<number>(0);
  return (
    <main class={mainStyle}>
      <header>
        <h1 class={headStyle}>IcecreamShop🍦🍨</h1>
      </header>
      <div class={containerStyle}>
        <section class={itemStyle}>
          <h2>Order</h2>
          <div class={pickerWrapStyle}>
            {flavorsList.map((f, idx) => (
              <div key={f} style={{ backgroundColor: f }} />
            ))}
          </div>
          <div class={actionStyle}>
            <button
              class={actionButtonStyle}
              onClick={() => console.log("Add!")}
            >
              Add
            </button>
            <button
              class={actionButtonStyle}
              onClick={() => console.log("Del!")}
            >
              Delete
            </button>
          </div>
          <div class={actionStyle}>
            <label>
              <input
                type="radio"
                name="serve"
                onClick={() => console.log("withCone ? true")}
              />{" "}
              with Cone 🍦
            </label>
            <label>
              <input
                type="radio"
                name="serve"
                onClick={() => console.log("withCone ? false")}
              />{" "}
              with Cup 🍨
            </label>
          </div>
        </section>
        <section class={itemStyle}>
          <h2>Preview</h2>
          <pre class={previewStyle}>{JSON.stringify(null)}</pre>
        </section>
      </div>
      <div class={orderStyle}>
        <button
          class={orderButtonStyle}
          onClick={() => console.log("My order is ????")}
        >
          Order👌
        </button>
      </div>
    </main>
  );
};

const mainStyle = css({
  width: "800px",
  margin: "0 auto",
  padding: "16px",
});

const headStyle = css({
  textAlign: "center",
});

const containerStyle = css({
  display: "grid",
  gridTemplateColumns: "60% 40%",
  gap: "16px",
});

const orderStyle = css({
  margin: "32px auto",
  textAlign: "center",
});

const orderButtonStyle = css({
  margin: "8px",
  width: "200px",
  fontSize: "1.4rem",
});

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

const pickerWrapStyle = css({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  margin: "32px auto",
});

const pickerStyle = (props: any) =>
  css({
    width: "80px",
    height: "80px",
    boxSizing: "border-box",
    border: props ? "4px dashed hotpink" : "none",
  });

const previewStyle = css({
  margin: "32px auto",
  padding: "8px",
  backgroundColor: "#eee",
});
