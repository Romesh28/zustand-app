import React from "react";
import shallow from "zustand/shallow";
import { useCounter } from "store";

const Controls = () => {
  const { increment, decrement, reset } = useCounter(
    ({ increment, decrement, reset }) => ({ increment, decrement, reset }),
    shallow
  );
  console.log("controls render");
  return (
    <div>
      <div className="d-flex gap-2">
        <button onClick={decrement} className="btn btn-primary">
          -
        </button>
        <button onClick={increment} className="btn btn-info">
          +
        </button>
        <button onClick={reset} className="btn btn-dark">
          reset
        </button>
      </div>
    </div>
  );
};

export default Controls;
