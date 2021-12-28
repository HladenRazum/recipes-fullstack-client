import { Container } from "@mui/material";
import React from "react";
import AddRecipeForm from "../../components/AddRecipeForm/AddRecipeForm";

interface Props {}

const CreateRecipe = (props: Props) => {
   return (
      <Container>
         <AddRecipeForm />
      </Container>
   );
};

export default CreateRecipe;
