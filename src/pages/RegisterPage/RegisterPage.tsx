import { Container, Typography, Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import UserRegisterForm from "../../components/UserRegisterForm/UserRegisterForm";

interface Props {}

const RegisterPage = (props: Props) => {
   return (
      <React.Fragment>
         <Container>
            <Paper
               sx={{
                  maxWidth: 480,
                  padding: 2,
                  margin: "3em auto",
               }}
            >
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
            </Paper>
         </Container>
      </React.Fragment>
   );
};

export default RegisterPage;
