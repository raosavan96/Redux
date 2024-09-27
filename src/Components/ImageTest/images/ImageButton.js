import React from "react";
import { useDispatch } from "react-redux";
import { imageAct } from "./ImageSlice";

function ImageButton() {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(imageAct());
        }}
      >
        Image Action
      </button>
    </>
  );
}

export default ImageButton;
