import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../Features/Counter/CounterSlice";
import imageReducer from "../Components/ImageTest/images/ImageSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    imagea: imageReducer
  }
});
