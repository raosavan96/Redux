import { createSlice } from "@reduxjs/toolkit";
import sawan from "./sawan.jpg";
import sonu from "./sonu.png";

const initialState = {
  value: sawan
};

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    imageAct: (state) => {
      state.value = sonu;
    }
  }
});

export const { imageAct } = imageSlice.actions;
export default imageSlice.reducer;
