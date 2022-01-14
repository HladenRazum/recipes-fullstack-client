import React from "react";
import { Container, Grid, ImageList, ImageListItem } from "@mui/material";
import { SingleRecipe } from "./Recipe/SingleRecipe";
import { IRecipe } from "../../repository/recipe-model";

interface RecipesProps {
   items: IRecipe[];
}

export const RecipesList = (props: RecipesProps) => {

   return (
      <ImageList sx={{ width: "100%", height: "100%" }}>
         {props.items && props.items.map((item) => (
            <SingleRecipe key={item._id} {...item} />
         ))}
      </ImageList>

   );
};
