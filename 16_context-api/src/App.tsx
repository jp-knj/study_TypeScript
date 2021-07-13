import React from "react";
import { Inputs } from "./Inputs";

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
    </main>
  );
};

export default App;
