import { Container, Typography, Box, Paper } from "@mui/material";
import React from "react";
import UserLoginForm from "../../components/UserLoginForm/UserLoginForm";
import { Link } from "react-router-dom";
import StyledPaper from "../../components/StyledPaper/StyledPaper";

interface Props {}

const LoginPage = (props: Props) => {
   return (
      <React.Fragment>
         <Container>
            <StyledPaper>
               <Typography variant="h5" mb={3}>
                  Login
               </Typography>
               <UserLoginForm />

               <Typography variant="body1">Don't have an accout?</Typography>
               <Link to="/register">
                  <Typography variant="body1" color="info.main">
                     Create a new account
                  </Typography>
               </Link>
            </StyledPaper>
         </Container>
      </React.Fragment>
   );
};

export default LoginPage;
