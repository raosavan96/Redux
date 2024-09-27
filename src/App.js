import React from "react";
import Counter from "./Components/CounterApp/Counter";
import ImageAcn from "./Components/ImageTest/images/ImageAcn";
import ImageButton from "./Components/ImageTest/images/ImageButton";

function App() {
  return (
    <>
      <Counter />
      <div style={{ display: "flex" }}>
        <ImageAcn />
        <ImageButton />
      </div>
    </>
  );
}

export default App;
