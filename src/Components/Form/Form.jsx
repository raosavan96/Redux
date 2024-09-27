import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { formValue } from "../../Features/Form/FormSlice";

function Form() {
  const [valueUser, setValueUser] = useState("");

  const dispatch = useDispatch();
  function handleForm(e) {
    e.preventDefault();
    dispatch(
      formValue({
        user: valueUser
      })
    );
  }

  return (
    <>
      <h1>Form</h1>

      <form>
        <label>Username</label>
        <input
          type="text"
          value={valueUser}
          onChange={(e) => {
            setValueUser(e.target.value);
          }}
        />
        <button type="submit" onClick={handleForm}>
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
