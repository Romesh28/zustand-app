import React from "react";
import shallow from "zustand/shallow";
import { useCounter } from "store";

const Count = () => {
  const { counter } = useCounter(({ counter }) => ({ counter }), shallow);
  console.log("count render");
  return (
    <>
      <h2>{counter}</h2>
    </>
  );
};

export default Count;
