import React from "react";
import { useSelector } from "react-redux";

function Tesst() {
  const valueCount = useSelector((state) => state.counter.value);
  return (
    <>
      <h1>{valueCount}</h1>
    </>
  );
}

export default Tesst;
