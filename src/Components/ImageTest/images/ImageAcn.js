import React from "react";
import { useSelector } from "react-redux";

function ImageAcn() {
  const imageVar = useSelector((state) => state.imagea.value);
  return (
    <>
      <div>
        <img width={400} src={imageVar} alt="" />
      </div>
    </>
  );
}

export default ImageAcn;
