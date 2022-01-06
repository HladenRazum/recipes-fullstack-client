import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { Recipes } from "../../components/Recipes/Recipes";

interface Props {}

const RecipesPage = (props: Props) => {
   return (
      <React.Fragment>
         <Container>
            <Typography textAlign="center" variant="h3">
               Recipes Page
            </Typography>
            <Grid container>
               <Grid item>
                  <Recipes />
               </Grid>
            </Grid>
         </Container>
      </React.Fragment>
   );
};

export default RecipesPage;
