import { Container, Typography } from "@mui/material";
import React from "react";
import UserLoginForm from "../../components/UserLoginForm/UserLoginForm";
import UserRegisterForm from "../../components/UserRegisterForm/UserRegisterForm";
import { Link } from "react-router-dom";

interface Props {}

const LoginPage = (props: Props) => {
   return (
      <React.Fragment>
         <Container>
            <Typography textAlign="center" variant="h3">
               Login
            </Typography>
            <UserLoginForm />
            <Typography variant="body1">Forgot your password?</Typography>
            <Link to="/register">
               <Typography variant="body1">Create an account</Typography>
            </Link>
         </Container>
      </React.Fragment>
   );
};

export default LoginPage;
