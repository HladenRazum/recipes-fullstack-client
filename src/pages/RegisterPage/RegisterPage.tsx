import { Container, Typography, Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import UserRegisterForm from "../../components/UserRegisterForm/UserRegisterForm";

interface Props { }

const RegisterPage = (props: Props) => {
   return (
      <React.Fragment>
         <Container>
            <Typography textAlign="center" variant="h3">
               Register
            </Typography>
            <Paper
               sx={{
                  maxWidth: 600,
                  padding: 2,
                  margin: "auto"
               }}
            >
               <Typography variant="h5" mb={3} gutterBottom>Register</Typography>
               <UserRegisterForm />
               <Typography variant="body1">Already have an account?</Typography>
               <Link to="/login">
                  <Typography variant="body1" color="info.main">Login with existing account.</Typography>
               </Link>
            </Paper>
         </Container>
      </React.Fragment>
   );
};

export default RegisterPage;
