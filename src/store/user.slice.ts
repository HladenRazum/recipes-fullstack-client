import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export interface IUser {
//    isLoggedIn: boolean;
// }
interface IUser {
   user: {
      username: string;
      id?: string;
   };
   token: string;
}

interface UserState {
   isLoggedIn: boolean;
   user: IUser | null;
}

const initialState: UserState = {
   isLoggedIn: false,
   user: null,
};

const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      login(state, action: PayloadAction<IUser>) {
         state.isLoggedIn = true;
         state.user = {
            user: action.payload.user,
            token: action.payload.token,
         };
      },
      logout(state) {
         state.isLoggedIn = false;
         state.user = null;
      },
   },
});
export const userActions = userSlice.actions;
export default userSlice;
