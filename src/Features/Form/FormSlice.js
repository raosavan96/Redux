import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: []
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    formValue: (state, action) => {
      state.value.push(action.payload);
    }
  }
});

export const { formValue } = formSlice.actions;

export default formSlice.reducer;
