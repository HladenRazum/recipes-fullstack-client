import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";

export interface IUser {
   username: string;
   password: string;
}

interface UsersState {
   users: IUser[] | [];
}

const initialState: UsersState = {
   users: [],
};

const usersSlice = createSlice({
   name: "users",
   initialState,
   reducers: {
      createUser: (state, action: PayloadAction<IUser>) => {
         state.users.push(action.payload);
      },
      // deleteUser(state, action) {
      // },
   },
});
export const usersActions = usersSlice.actions;
export default usersSlice.reducer;
