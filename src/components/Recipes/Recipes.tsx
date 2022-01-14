import React from "react";
import { Grid } from "@mui/material";
import { Recipe } from "./Recipe/Recipe";
import { IRecipe } from "../../repository/recipe-model";



interface RecipesProps {
   items: IRecipe[];
}

export const Recipes = (props: RecipesProps) => {

   return (
      <Grid gap={2} container component="ul">
         {props.items &&
            props.items.map((item) => (
               <Grid key={item._id} item>
                  <Recipe {...item} />
               </Grid>
            ))}
      </Grid>
   );
};
