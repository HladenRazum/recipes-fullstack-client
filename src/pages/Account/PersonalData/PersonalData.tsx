import { Container, Typography } from '@mui/material';
import React, { ChangeEvent } from 'react';
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { usersActions } from '../../../store/users.slice';


interface Props {

}

const PersonalData = (props: Props) => {
   const dispatch = useAppDispatch();
   const users = useAppSelector((state) => state.users.users);

   const [username, setUsername] = React.useState("");
   const [password, setPassword] = React.useState("");


   const usernameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setUsername(e.target.value);
   };

   const passwordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
   };

   const createUserHandler = () => {
      dispatch(usersActions.createUser({ username, password }));
   };

   return (
      <Container>
         <Typography variant="h3">Your Details</Typography>
         <input type="text" placeholder="username..." onChange={usernameChangeHandler} value={username} />
         <input type="password" placeholder="password..." onChange={passwordChangeHandler} value={password} />
         <button onClick={createUserHandler}>Create User</button>
      </Container>
   );
};

export default PersonalData
   ;
