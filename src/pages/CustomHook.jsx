import React, { useCallback, useState } from "react";
import reactLogo from "../assets/react.svg";

const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount);
  const handlechange = useCallback(({ target: { value } }) => {
    setCount(value);
  }, []);

  return {
    value: count,
    increment: () => setCount((prevCount) => prevCount + 1),
    decrement: () => setCount((prevCount) => prevCount - 1),
    reset: () => setCount(initialCount),

    handlechange: handlechange,
  };
};

const CustomHook = () => {
  const counter = useCounter(1);
  const [value, setValue] = useState(1);
  return (
    <section className="App">
      <div>
        <div>
          <a className="imglink" href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <span>{counter.value}</span>
          <a className="imglink" href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Custom Hook with Use Reducer.</h1>
        <div className="card">
          <button className="btn1 incr" onClick={counter.increment}>
            +
          </button>
          <input
            className="input"
            type="text"
            value={counter.value}
            onChange={counter.handlechange}
          />

          <button
            className="btn1 decr"
            onClick={counter.decrement}
            disabled={counter.value === 1}
          >
            -
          </button>
          <button className="btn1 res" onClick={counter.reset}>
            Reset
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomHook;
