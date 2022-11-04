import React, { useState } from "react";
import reactLogo from "../assets/react.svg"
import reducer from "../Components/reducer";
import useCounter from "../Hooks/useCounter";
const CustomHook = () => {
  const [count, dispatch]=useCounter(reducer,1)
  const[value,setValue] = useState("")
  return (
    <section className="App">
      <div>
      <div>
        <a  className="imglink" href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <span>{count}</span>
        <a className="imglink" href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Custom Hook with Use Reducer.</h1>
      <div className="card">
        <button  onClick={()=>{dispatch({type:"increment"})}} >
          +
        </button>
        <input
          className="input"
          type="text"
          value={value}
       onChange={(e)=>setValue(e.target.value)}
          
        />
        <button className="btn1 set" onClick={()=> dispatch({type: "set",payload:+value})}>Set</button>
        <button onClick={()=>{dispatch({type:"decrement"})}} disabled={count===1}> 
          -
        </button>
      </div>
      </div>
    </section>
  );
};

export default CustomHook;
