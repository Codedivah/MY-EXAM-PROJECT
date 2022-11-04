import { useReducer, useState } from "react";
import useCounter from "../Hooks/useCounter";
import reducer from "../Components/reducer";

const Counter = () => {
  const [state, dispatch]=useReducer(reducer, 1);
  const[value,setValue]=useState("")

  return (
    <>
      <section>
        <div  className="container">
        <h3 className="cart">My Shopping Cart</h3>
        <h2>Quantity:{state}</h2>

        <button
          className="btn1 decr"
          onClick={() => dispatch({ type: "decrement" })}
          disabled={state === 1}
        >
          _
        </button>
        <input
          className="input"
          type="text"
          value={value}
       onChange={(e)=>setValue(e.target.value)}
          
        />
        <button className="btn1 set" onClick={()=> dispatch({type: "set",payload:+value})}>Set</button>
        <button
          className="btn1 incr"
          onClick={() => dispatch({ type: "increment" })}
        >
          +
        </button>
        <button
          className="btn1 res"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
        <p>
          <button className="btn cont" >
            CONTINUE SHOPPING
          </button>
          <button className="btn view" >
            VIEW CART AND CHECK OUT
          </button>
        </p>
        </div>
      </section>
    </>
  );
};

export default Counter;
// onChange={({ target: { value } }) =>
          //   // dispatch({ type: "setCount", payload: { amount: Number(value)
          //  } })}