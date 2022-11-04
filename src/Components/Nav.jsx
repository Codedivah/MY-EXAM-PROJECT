import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
    
      <nav>
      <Link to="/"   className="home">Home</Link>
        <div>
        <Link to="error" className="errorlink">
          ErrorBoundary
        </Link>
        <Link to="errorpage" className="error">
          404 Page
        </Link>
        <Link to="/customreducer" className="customlink">
          CustomHook
        </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
