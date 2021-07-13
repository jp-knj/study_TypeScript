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
      <Swatch {...rgb} />
      <Inputs {...rgb} />
      <Sliders {...rgb} dispatch={dispatch} />
    </main>
  );
};

export default App;
