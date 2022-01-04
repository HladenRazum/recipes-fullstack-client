import { configureStore } from "@reduxjs/toolkit";
import { authenticationSlice } from "./auth";
import { counterSlice } from "./counter";

const store = configureStore({
   reducer: {
      counter: counterSlice.reducer,
      authentication: authenticationSlice.reducer,
   },
});

export default store;
