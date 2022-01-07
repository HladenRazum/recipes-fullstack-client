import React from "react";
import { Card, Container, Grid, Typography } from "@mui/material";
import Header from "../../components/Header/Header";
import FeaturedRecipe from "../../components/Recipes/Recipe/FeaturedRecipe";
import { Recipes } from "../../components/Recipes/Recipes";
import SearchRecipesForm from "../../components/SearchRecipesForm/SearchRecipesForm";
import { Recipe } from "../../components/Recipes/Recipe/Recipe";

interface Props {}

export const Home = (props: Props) => {
   return (
      <React.Fragment>
         <Container>
            <SearchRecipesForm />
         </Container>
         <Header />
         <Container>
            <Grid container justifyContent="space-between">
               <Grid item md={8}>
                  <FeaturedRecipe />
               </Grid>
               <Grid item md={3}>
                  <Recipe
                     title="Testing Recipe"
                     description="A tasty breakfast with eggs"
                     rating={9}
                  />
               </Grid>
            </Grid>
         </Container>
      </React.Fragment>
   );
};

// useSelector => use this to return a slice of the store state
// useDispatch => allows us to dispatch actions to the store