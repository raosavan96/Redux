import React from "react";
import { useDispatch } from "react-redux";
import { decrement } from "../../Features/Counter/CounterSlice";

function Decrement() {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
    </>
  );
}

export default Decrement;
