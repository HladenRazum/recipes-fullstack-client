import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RecipesAPI } from "../../repository/recipe-api";
import { RecipeModel } from "../../repository/recipe-model";

interface Props {}

const DetailedRecipePage = (props: Props) => {
   const { id } = useParams();
   const [currentRecipe, setCurrentRecipe] = React.useState<RecipeModel>();

   useEffect(() => {
      if (id) {
         RecipesAPI.findItemById(id).then((data) => {
            setCurrentRecipe(data);
         });
      }
   }, [id]);

   if (!id || !currentRecipe) {
      return <h2>Could not find that resource.</h2>;
   }

   return (
      <Container>
         <Typography variant="h3" textAlign="center" gutterBottom>
            {currentRecipe.name}
         </Typography>

         <Typography variant="body1" textAlign="center" gutterBottom>
            createdBy: {currentRecipe.createdBy}
         </Typography>

         <Grid container justifyContent="space-between">
            <Grid item md={4}>
               <Box
                  sx={{
                     display: "flex",
                  }}
               >
                  <img alt={currentRecipe.name} src={currentRecipe.url} />
               </Box>
            </Grid>
            <Grid item md={7}>
               <Typography variant="body1">
                  {currentRecipe.instructions}
               </Typography>
            </Grid>
         </Grid>

         <ul>
            {currentRecipe.ingredients.map((ingredient, index) => (
               <li key={ingredient.ingredientName + index}>
                  <Grid container>
                     <Grid md={3} sm={3} item>
                        {ingredient.ingredientName} :
                     </Grid>
                     <Grid md={3} sm={3} item>
                        {" "}
                        {ingredient.ingredientPortion}
                     </Grid>
                  </Grid>
               </li>
            ))}
         </ul>
      </Container>
   );
};

export default DetailedRecipePage;
