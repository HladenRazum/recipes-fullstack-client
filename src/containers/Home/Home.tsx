import React from "react";
import { Container, Grid, Typography } from "@mui/material";

interface Props {}

export const Home = (props: Props) => {
   return (
      <Container>
         <Typography textAlign="center" variant="h3">
            Homepage
         </Typography>

         <Grid container margin="auto">
            <Grid item component="aside" md={4} sm={4}>
               <h3>ASIDE WITH FILTERS FOR RECIPES</h3>
            </Grid>

            <Grid item component="section" md={8} sm={8}>
               <h3>SECTION WITH RECIPES</h3>
            </Grid>
         </Grid>
      </Container>
   );
};
