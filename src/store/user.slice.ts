import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export interface IUser {
//    isLoggedIn: boolean;
// }

interface UserState {
   isLoggedIn: boolean;
}

const initialState: UserState = {
   isLoggedIn: false,
};

const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      login(state) {
         state.isLoggedIn = true;
      },
      logout(state) {
         state.isLoggedIn = false;
      },
   },
});
export const userActions = userSlice.actions;
export default userSlice;
