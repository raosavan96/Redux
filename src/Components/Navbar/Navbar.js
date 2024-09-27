import React from "react";
import { useSelector } from "react-redux";

function Navbar() {
  //   const userMain = useSelector(
  //     (state) => state.formvalue.value[0] && state.formvalue.value[0].user
  //   );

  const data = useSelector((state) => state.formvalue.value);
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "10vh",
          backgroundColor: "orange",
          display: "flex"
        }}
      >
        {/* <h1 style={{ textAlign: "center" }}>{userMain}</h1> */}

        {data.map((value) => (
          <ul>
            <li>{value.user}</li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default Navbar;
