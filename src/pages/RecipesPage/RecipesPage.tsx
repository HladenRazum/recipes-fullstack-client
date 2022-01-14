import { Container, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Recipes } from "../../components/Recipes/Recipes";
import { IRecipe } from "../../repository";

interface Props {}

const RecipesPage = (props: Props) => {
   const [allRecipes, setAllRecipes] = useState<IRecipe | []>([]);

   const getAllRecipes = async () => {
      try {
         const response = await fetch("http://localhost:9000/api/recipes");
         if (response.status !== 200) {
            throw new Error(`Failed request: STATUS_CODE: ${response.status}`);
         }
         const data = await response.json();
         setAllRecipes(data);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      getAllRecipes(); //
      console.log(allRecipes);
   }, []);

   return (
      <React.Fragment>
         <Container>
            <Typography textAlign="center" variant="h3">
               Recipes Page
            </Typography>
            <Grid container>
               <Grid item>
                  <Recipes />
               </Grid>
            </Grid>
         </Container>
      </React.Fragment>
   );
};

export default RecipesPage;
