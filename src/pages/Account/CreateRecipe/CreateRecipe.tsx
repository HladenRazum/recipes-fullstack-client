import { Container, Typography, Paper } from "@mui/material";
import React from "react";
import AddRecipeForm from "../../../components/AddRecipeForm/AddRecipeForm";

interface Props { }

const CreateRecipe = (props: Props) => {
   return (
      <Container>
         <Paper sx={{
            maxWidth: 600,
            padding: 2,
            margin: "auto"
         }}>
            <Typography variant="h5" mb={3} gutterBottom>Create a new recipe</Typography>
            <AddRecipeForm />
         </Paper>
      </Container>
   );
};

export default CreateRecipe;
