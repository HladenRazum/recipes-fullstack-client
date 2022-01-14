import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface IUser {
   username: string;
   password: string;
}

interface UsersState {
   users: IUser[];
}

const initialState: UsersState = {
   users: [
      {
         username: "ASDASDSD",
         password: "ASDASDASDASD",
      },
   ],
};

const usersSlice = createSlice({
   name: "users",
   initialState,
   reducers: {
      createUser: (state, action: PayloadAction<IUser>) => {
         if (state.users.length) {
            state.users.push(action.payload);
         }
      },
   },
});
export const usersActions = usersSlice.actions;
export default usersSlice.reducer;
