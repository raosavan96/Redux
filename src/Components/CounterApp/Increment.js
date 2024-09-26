import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../../Features/Counter/CounterSlice";

function Increment() {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
    </>
  );
}

export default Increment;
