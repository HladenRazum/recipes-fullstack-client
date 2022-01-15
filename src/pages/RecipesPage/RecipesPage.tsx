import { Button, Container, Grid, TextField, Typography, Box, ButtonGroup } from "@mui/material";
import { constants } from "os";
import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { RecipesList } from "../../components/Recipes/RecipesList";
import { RecipesAPI } from "../../repository/recipe-api";
import { IRecipe } from "../../repository/recipe-model";

interface Props { }

const RecipesPage = (props: Props) => {
   const [allRecipes, setAllRecipes] = useState<IRecipe[]>([]);
   const [keyword, setKeyword] = React.useState("");

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



   const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setKeyword(e.target.value);
   };

   const submitHandler = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(keyword);
      // Get request



   };

   return (
      <React.Fragment>
         <Container>
            <Grid container justifyContent="space-between" sx={{ maxWidth: 900, margin: "auto" }}>
               <Grid item md={3}>
                  <p>Filters here</p>
               </Grid>
               <Grid item md={8}>
                  <Box sx={{ marginBottom: 5 }}>
                     <form onSubmit={submitHandler}>
                        <TextField label="Search recipes" size="small" onChange={inputChangeHandler} />
                        <Button variant="contained" color="info" type="submit">Submit</Button>
                     </form>
                  </Box>
                  <RecipesList items={allRecipes} />
               </Grid>
            </Grid>
         </Container>
      </React.Fragment>
   );
};

export default RecipesPage;
