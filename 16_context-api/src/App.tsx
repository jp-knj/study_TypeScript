import React from "react";
import { Swatch } from "./Swatch";
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
      <Swatch />
      <Inputs />
      <Sliders />
    </main>
  );
};

export default App;
