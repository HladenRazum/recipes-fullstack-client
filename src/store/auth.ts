import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   isAuthenticated: false,
};

export const authenticationSlice = createSlice({
   name: "authentication",
   initialState,
   reducers: {
      login(state) {
         state.isAuthenticated = true;
      },
      logout(state) {
         state.isAuthenticated = false;
      },
   },
});

export const authenticationActions = authenticationSlice.actions;
