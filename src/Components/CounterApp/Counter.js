import React from "react";
import { useSelector } from "react-redux";
import Increment from "./Increment";
import Decrement from "./Decrement";
import Reset from "./Reset";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  return (
    <>
      <div>Counter</div>

      <h1>{count}</h1>

      <Increment />

      <Decrement />
      <Reset />
    </>
  );
}

export default Counter;
