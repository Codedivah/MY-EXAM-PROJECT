import React from "react";
import Counter from "./pages/Counter";
import { BrowserRouter as Router,Route, Routes, useNavigate } from "react-router-dom";
import Error from "./pages/Error";
import "./App.css"
import Boundary from "./pages/Boundary";
import Nav from "./Components/Nav";
import CustomHook from "./pages/CustomHook";

import {ErrorBoundary} from "react-error-boundary"

function fallBack({error, resetErrorBoundary}){
  return <div>
    Something went wrong
    <p style={{color:"red"}}>{error.message}</p>
    <button onClick={resetErrorBoundary}>Go Home</button>
  </div>
}

const App = () => {
const navigate=useNavigate()
  return (
    <ErrorBoundary FallbackComponent={fallBack} onReset={()=>{
      navigate("/")
    }
        }>
    <div className="app">
   
 
      <Nav/>
        <Routes>
      <Route path="/" element={<Counter />} />
      <Route path="error" element={<Boundary/>}/>
      <Route path="customreducer" element={<CustomHook/>}/>
      <Route path="*" element={<Error />} />
   
    </Routes>

    </div>
    </ErrorBoundary>
  );
};

export default App;
