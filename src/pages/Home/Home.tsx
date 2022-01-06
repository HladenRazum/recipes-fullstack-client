import React from "react";
import { Card, Container, Grid, Typography } from "@mui/material";
import Header from "../../components/Header/Header";
import FeaturedRecipe from "../../components/Recipes/Recipe/FeaturedRecipe";
import { Recipes } from "../../components/Recipes/Recipes";

interface Props {}

export const Home = (props: Props) => {
   return (
      <React.Fragment>
         <Typography variant="h2" textAlign="center">
            Homepage
         </Typography>
         <Header />
         <Container>
            <Card sx={{ padding: 2 }}>
               <FeaturedRecipe />
            </Card>
         </Container>
      </React.Fragment>
   );
};

// useSelector => use this to return a slice of the store state
// useDispatch => allows us to dispatch actions to the store
