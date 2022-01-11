import { Container, Typography } from "@mui/material";
import React from "react";
import AddRecipeForm from "../../../components/AddRecipeForm/AddRecipeForm";

interface Props { }

const CreateRecipe = (props: Props) => {
   return (
      <Container>
         <Typography variant="h3">Create a new Recipe</Typography>
         <AddRecipeForm />
      </Container>
   );
};

export default CreateRecipe;
