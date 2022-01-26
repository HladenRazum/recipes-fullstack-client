import React, { useEffect, useState } from "react";
import { RecipesAPI } from "../../../repository/recipe-api";
import { IRecipe } from "../../../repository/recipe-model";
import { Grid, Container, Typography, Box } from "@mui/material";

interface Props {}

const FeaturedRecipes = (props: Props) => {
   const [allRecipes, setAllRecipes] = useState<IRecipe[]>([]);

   const getAllRecipes = async () => {
      try {
         const data = await RecipesAPI.getAllItems();
         if (data) {
            setAllRecipes(data);
            // show notification
         }
      } catch (error) {
         console.log(error);
         // show notification
      }
   };

   useEffect(() => {
      getAllRecipes();
   }, []);

   return <Container></Container>;
};

export default FeaturedRecipes;
