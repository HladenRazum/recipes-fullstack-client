import { Container, Typography } from "@mui/material";
import React from "react";
import AddRecipeForm from "../../components/AddRecipeForm/AddRecipeForm";

interface Props {}

const Account = (props: Props) => {
   return (
      <React.Fragment>
         <Container>
            <Typography textAlign="center" variant="h3">
               Account Settings
            </Typography>
            <AddRecipeForm />
         </Container>
      </React.Fragment>
   );
};

export default Account;
