import React from "react";
import { Card, Container, Grid, Typography } from "@mui/material";
import Header from "../../components/Header/Header";
import FeaturedRecipes from "../../components/Recipes/Recipe/FeaturedRecipes";

interface Props { }

export const Home = (props: Props) => {
   return (
      <React.Fragment>
         <Header />
         <Container>
            <FeaturedRecipes />
         </Container>
      </React.Fragment>
   );
};

// useSelector => use this to return a slice of the store state
// useDispatch => allows us to dispatch actions to the store
