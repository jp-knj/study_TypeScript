import React from "react";
import { Inputs } from "./Inputs";
import { Sliders } from "./Sliders";
import { reducer } from "./reducer";

const App = () => {
  const [rgb, dispatch] = React.useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });
  return (
    <main>
      <div className="color-swatch" style={{}} />
      <Inputs {...rgb} />
      <Sliders />
    </main>
  );
};

export default App;
