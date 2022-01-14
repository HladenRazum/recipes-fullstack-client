import { Container, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Recipes } from "../../components/Recipes/Recipes";
import { RecipesAPI } from "../../repository/recipe-api";
import { IRecipe } from "../../repository/recipe-model";

interface Props { }

const RecipesPage = (props: Props) => {
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
   console.log(allRecipes);


   return (
      <React.Fragment>
         <Container>
            <Typography textAlign="center" variant="h3">
               Recipes Page
            </Typography>
            <Grid container>
               <Recipes items={allRecipes} />
            </Grid>
         </Container>
      </React.Fragment>
   );
};

export default RecipesPage;
