import React from "react";
import Counter from "./Components/CounterApp/Counter";
import ImageAcn from "./Components/ImageTest/images/ImageAcn";
import ImageButton from "./Components/ImageTest/images/ImageButton";
import Tesst from "./Components/ImageTest/images/Tesst";
import Form from "./Components/Form/Form";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      {/* <Counter />
      <div style={{ display: "flex" }}>
        <ImageAcn />
        <ImageButton />
      </div> */}

      <Form />
    </>
  );
}

export default App;
