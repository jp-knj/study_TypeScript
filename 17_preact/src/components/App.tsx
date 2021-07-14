import { css } from "goober";

export const App = () => {
  return (
    <main class={mainStyle}>
      <header>
        <h1 class={headStyle}>IcecreamShop🍦🍨</h1>
      </header>
      <div class={containerStyle}>
        <section class={itemStyle}>
          <h2>Order</h2>
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
