import  { useState} from "react";


function useCounter(reducer, initialState) {
 const[count, setCount]=useState(initialState)

 function dispatch(action){
    let state= reducer(count,action)
    setCount(state)
  
 }
 return [count,dispatch]
}

export default useCounter;
