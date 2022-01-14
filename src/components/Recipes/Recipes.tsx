import React from "react";
import { Grid } from "@mui/material";
import { IRecipe } from "../../repository";
import { Recipe } from "./Recipe/Recipe";

interface RecipesProps {
   items: IRecipe[];
}

export const Recipes = (props: RecipesProps) => {
   return (
      <Grid gap={2} container component="ul">
         {props.items &&
            props.items.map((item) => (
               <Grid key={item._id} item>
                  <Recipe title={item.name} description={item.instructions} />
               </Grid>
            ))}
      </Grid>
   );
};
