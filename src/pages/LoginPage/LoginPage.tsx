import { Container, Typography } from "@mui/material";
import React from "react";
import UserLoginForm from "../../components/UserLoginForm/UserLoginForm";
import UserRegisterForm from "../../components/UserRegisterForm/UserRegisterForm";

interface Props {}

const LoginPage = (props: Props) => {
   return (
      <React.Fragment>
         <Container>
            <Typography textAlign="center" variant="h3">
               Login
            </Typography>
            <UserLoginForm />
         </Container>
      </React.Fragment>
   );
};

export default LoginPage;
