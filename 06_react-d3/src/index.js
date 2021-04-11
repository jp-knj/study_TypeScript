import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";

function App() {

  // generate random data
  // randomise data every time when click a btn.
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
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
