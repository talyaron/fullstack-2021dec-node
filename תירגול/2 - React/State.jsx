import React from "react";
import { useState } from "react";
import Child from "./Child";

const State = () => {
  const [number, setNumber] = useState(5);

  //   const handleGetTen = () => {
  //     setNumber(10);
  //   };

  return (
    <div>
      <Child number={number} />
      <button
        onClick={() => {
          setNumber(10);
        }}
      >
        Change to 10
      </button>
    </div>
  );
};

export default State;
