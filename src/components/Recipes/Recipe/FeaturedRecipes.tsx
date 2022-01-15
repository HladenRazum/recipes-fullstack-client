import React, { useEffect, useState } from "react";
import { RecipesAPI } from "../../../repository/recipe-api";
import { IRecipe } from "../../../repository/recipe-model";
import { Grid, Container } from "@mui/material";

interface Props {}

const FeaturedRecipe = (props: Props) => {
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
            <Grid container sx={{ margin: "auto" }} gap={4}>
               <Grid item md={8}>
                  <img
                     loading="lazy"
                     src={allRecipes[0].url}
                     alt={allRecipes[0].name}
                  />
               </Grid>
               <Grid item md={4}>
                  <img
                     loading="lazy"
                     src={allRecipes[1].url}
                     alt={allRecipes[1].name}
                  />
                  <img
                     loading="lazy"
                     src={allRecipes[2].url}
                     alt={allRecipes[2].name}
                  />
                  <img
                     loading="lazy"
                     src={allRecipes[3].url}
                     alt={allRecipes[3].name}
                  />
               </Grid>
            </Grid>
         )}
      </Container>
   );
};

export default FeaturedRecipe;
