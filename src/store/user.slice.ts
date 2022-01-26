import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export interface IUser {
//    isLoggedIn: boolean;
// }
interface IUser {
   user: {
      username: string;
   };
}

interface UserState {
   isLoggedIn: boolean;
   user: IUser | null;
   token: string | null;
}

const initialState: UserState = {
   isLoggedIn: false,
   user: null,
   token: null,
};

const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      login(state, action: PayloadAction<IUser>) {
         state.isLoggedIn = true;
         state.user = action.payload.user;
         state.token = action.payload.token;
      },
      logout(state) {
         state.isLoggedIn = false;
         state.user = null;
      },
   },
});
export const userActions = userSlice.actions;
export default userSlice;
