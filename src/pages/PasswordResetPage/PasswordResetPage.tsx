import { Container, Typography, Paper } from "@mui/material";
import React from "react";
import ResetPasswordForm from "../../components/ResetPasswordForm/ResetPasswordForm";

interface Props {}

const PasswordResetPage = (props: Props) => {
   return (
      <Container>
         <Paper
            sx={{
               maxWidth: 480,
               padding: 2,
               margin: "3em auto",
            }}
         >
            <Typography variant="h5">Forgotten Password</Typography>
            <Typography variant="body2" mb={3} color="info.main">
               We will send a code to your email address so you can reset your
               password.
            </Typography>
            <ResetPasswordForm />
         </Paper>
      </Container>
   );
};

export default PasswordResetPage;
