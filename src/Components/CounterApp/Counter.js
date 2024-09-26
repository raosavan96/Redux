import React from "react";
import { useSelector } from "react-redux";
import Increment from "./Increment";
import Decrement from "./Decrement";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  return (
    <>
      <div>Counter</div>

      <h1>{count}</h1>

      <Increment />

      <Decrement />
    </>
  );
}

export default Counter;
