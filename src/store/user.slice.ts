import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface IUser {
   username: string;
   password: string;
}

interface UserState {
   user: IUser | null;
}

const initialState: UserState = {
   user: null,
};

const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      login(state, payload) {},
      logout(state) {
         state.user = null;
      },
   },
});
export const userActions = userSlice.actions;
export default userSlice;
