import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";

import PieClass from "./PieClass";
import PieHooks from "./PieHooks";
import PieSVG from "./PieSVG";

function App() {

  const [width, height, innerRadius, outerRadius] = [200, 200, 60, 100];

  // generate random data
  // randomise data every time, When clicked a btn.
  const generateData = (value, length = 5) =>
    d3.range(length).map((item, index) => ({
      date: index,
      value: value === null || value === undefined ? Math.random() * 100 : value
    }));
  const [data, setData] = useState(generateData());
  const changeData = () => {
    setData(generateData());
  };

  return (
    <div className="App">
      <div>
        <button onClick={changeData}>Click</button>
      </div>
      <div>
        <h2 className="label">React Class</h2>
        <PieClass
          data={data}
          width={width}
          height={height}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
        />
      </div>
      <div>
        <h2>Hooks</h2>
        <PieHooks
          data={data}
          width={width}
          height={height}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
        />
      </div>
      <div>
        <h2 className="label">SVG Elements</h2>
        <PieSVG
          data={data}
          width={width}
          height={height}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
