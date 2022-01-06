import { Grid } from "@mui/material";
import React from "react";
import { Recipe } from "./Recipe/Recipe";

interface RecipesProps {}

export const Recipes = (props: RecipesProps) => {
   return (
      <Grid gap={2} container>
         <Grid item>
            <Recipe
               title="Recipe title"
               description="Recipe Description"
               rating={10}
            />
         </Grid>
         <Grid item>
            <Recipe
               title="Recipe title"
               description="Recipe Description"
               rating={10}
            />
         </Grid>
         <Grid item>
            <Recipe
               title="Recipe title"
               description="Recipe Description"
               rating={10}
            />
         </Grid>
      </Grid>
   );
};
