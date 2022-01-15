import React, { useEffect, useState } from "react";
import { RecipesAPI } from "../../../repository/recipe-api";
import { IRecipe } from "../../../repository/recipe-model";
import { Grid, Container, Typography, Box } from "@mui/material";

interface Props { }

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

   return (
      <Container>
         {allRecipes.length && (
            <Grid container sx={{ margin: "auto", justifyContent: "center" }} gap={3}>
               <Grid item md={3}>
                  <img
                     loading="lazy"
                     src={allRecipes[1].url}
                     alt={allRecipes[1].name}
                  />
                  <Typography my={3} textAlign="center" variant="h5">Desserts</Typography>
               </Grid>
               <Grid item md={3}>
                  <img
                     loading="lazy"
                     src={allRecipes[0].url}
                     alt={allRecipes[0].name}
                  />
                  <Typography my={3} textAlign="center" variant="h5">Meals</Typography>

               </Grid>
               <Grid item md={3}>
                  <img
                     loading="lazy"
                     src={allRecipes[3].url}
                     alt={allRecipes[3].name}
                  />
                  <Typography my={3} textAlign="center" variant="h5">Breakfast</Typography>

               </Grid>
            </Grid>
         )}
      </Container>
   );
};

export default FeaturedRecipes;
