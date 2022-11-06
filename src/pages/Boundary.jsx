import { useState } from "react";

const ErrorBoundaryTest = () => {
  const [error, setError] = useState(false);

  if (error) {
    throw Error("something went wrong");
  }
  return (
    <div>
      <button onClick={() => setError(true)}>Test Error</button>
    </div>
  );
};

export default ErrorBoundaryTest;
