import { Container, Typography, Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import StyledPaper from "../../components/StyledPaper/StyledPaper";
import UserRegisterForm from "../../components/UserRegisterForm/UserRegisterForm";

interface Props {}

const RegisterPage = (props: Props) => {
   return (
      <React.Fragment>
         <Container>
            <StyledPaper>
               <Typography variant="h5" mb={3} gutterBottom>
                  Register
               </Typography>
               <UserRegisterForm />
               <Typography variant="body1">Already have an account?</Typography>
               <Link to="/login">
                  <Typography variant="body1" color="info.main">
                     Login with existing account.
                  </Typography>
               </Link>
            </StyledPaper>
         </Container>
      </React.Fragment>
   );
};

export default RegisterPage;
