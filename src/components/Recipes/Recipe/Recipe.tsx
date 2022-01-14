import { Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { IRecipe } from "../../../repository/recipe-model";
import mealDefault from "../../../assets/mealDefault.jpg";

interface RecipeProps extends IRecipe {}

export const Recipe: React.FC<RecipeProps> = ({
   name,
   instructions,
   ingredients,
   _id,
   url,
}) => {
   console.log(url);

   let recipeImage = mealDefault;

   //   useEffect(() => {
   //    if ()

   //   }, [])

   return (
      <Card sx={{ padding: 2 }}>
         <Typography variant="h3">{name}</Typography>
         <Typography variant="body1">{instructions}</Typography>
         <img alt={name} src={url || recipeImage} />
         <Grid container component="ul">
            {ingredients.map((ingredient) => (
               <Grid item key={_id}>
                  <Typography variant="body1">
                     {ingredient.ingredientName}
                  </Typography>
                  <Typography variant="body2">
                     {ingredient.ingredientPortion}
                  </Typography>
               </Grid>
            ))}
            {/* <Grid item>
               <Typography variant="body1"></Typography>
            </Grid> */}
         </Grid>
      </Card>
   );
};
