import React, { useState } from 'react';
import './App.css';

function App() {
  const [val, setVal] = useState("");

  function clicking(key) {
    setVal(val + key);
  }

  function clear() {
    setVal("");
  }

  function result() {
    try {
      setVal(eval(val).toString());
    } catch {
      setVal("Error");
    }
  }

  return (
    <div className="container">
      <div className="calculater">
        <input type="text" className="screen" value={val} readOnly />

        <div className="keypad">
          <button onClick={() => clicking("1")}>1</button>
          <button onClick={() => clicking("2")}>2</button>
          <button onClick={() => clicking("3")}>3</button>
          <button onClick={() => clicking("4")}>4</button>
        </div>

        <div className="keypad">
          <button onClick={() => clicking("5")}>5</button>
          <button onClick={() => clicking("6")}>6</button>
          <button onClick={() => clicking("7")}>7</button>
          <button onClick={() => clicking("8")}>8</button>
        </div>

        <div className="keypad">
          <button onClick={() => clicking("9")}>9</button>
          <button onClick={() => clicking("0")}>0</button>
          <button onClick={() => clicking("+")}>+</button>
          <button onClick={() => clicking("-")}>-</button>
        </div>

        <div className="keypad">
          <button onClick={() => clicking("*")}>*</button>
          <button onClick={() => clicking("/")}>/</button>
          <button onClick={result}>=</button>
          <button onClick={clear}>C</button>
        </div>
      </div>
    </div>
  );
}

export default App;
