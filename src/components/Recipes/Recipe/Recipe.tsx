import { Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { IRecipe } from "../../../repository/recipe-model";

interface RecipeProps extends IRecipe {
}

export const Recipe: React.FC<RecipeProps> = ({ name, instructions, ingredients, _id, request }) => {

   console.log(request);

   let imageSrc;
   if (request === undefined || request.url || undefined) {
      imageSrc = "";
   } else {
      imageSrc = request.url;
   }

   return (
      <Card sx={{ padding: 2 }}>
         <Typography variant="h3">{name}</Typography>
         <Typography variant="body1">{instructions}</Typography>
         <img alt={name} src={imageSrc} />
         <Grid container component="ul">
            {ingredients.map((ingredient) => (
               <Grid item key={_id}>
                  <Typography variant="body1">{ingredient.ingredientName}</Typography>
                  <Typography variant="body2">{ingredient.ingredientPortion}</Typography>
               </Grid>
            ))}
            {/* <Grid item>
               <Typography variant="body1"></Typography>
            </Grid> */}
         </Grid>
      </Card>
   );
};
