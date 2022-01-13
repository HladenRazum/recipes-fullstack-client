import { createSlice } from "@reduxjs/toolkit";

import { USERS_DATA } from "./fakeDATA";

export type Value = string[] | [];

const initialState = {
   value: USERS_DATA
};

export const recipesSlice = createSlice({
   name: "recipes",
   initialState: initialState,
   reducers: {
      addUser: (state, action) => {
         state.value.push(action.payload);
      }
   }
});


export const recipesActions = recipesSlice.actions;
export default recipesSlice.reducer;