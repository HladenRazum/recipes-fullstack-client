import { Container, Typography, Paper } from "@mui/material";
import React from "react";
import UserRegisterForm from "../../components/UserRegisterForm/UserRegisterForm";

interface Props {}

const RegisterPage = (props: Props) => {
   return (
      <React.Fragment>
         <Container>
            <Typography textAlign="center" variant="h3">
               Register
            </Typography>
            <UserRegisterForm />
         </Container>
      </React.Fragment>
   );
};

export default RegisterPage;
