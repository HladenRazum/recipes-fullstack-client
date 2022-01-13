import React from "react";
import { Container, Typography, Paper } from "@mui/material";
import ResetPasswordForm from "../../components/ResetPasswordForm/ResetPasswordForm";
import StyledPaper from "../../components/StyledPaper/StyledPaper";

interface Props {}

const PasswordResetPage = (props: Props) => {
   return (
      <Container>
         <StyledPaper>
            <Typography variant="h5">Forgotten Password</Typography>
            <Typography variant="body2" mb={3} color="info.main">
               We will send a code to your email address so you can reset your
               password.
            </Typography>
            <ResetPasswordForm />
         </StyledPaper>
      </Container>
   );
};

export default PasswordResetPage;
