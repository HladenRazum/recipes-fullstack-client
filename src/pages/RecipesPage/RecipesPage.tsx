import { Container, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

interface Props {}

const RecipesPage = (props: Props) => {
   return (
      <React.Fragment>
         <Container>
            <Typography textAlign="center" variant="h3">
               Recipes Page
            </Typography>
            <Typography variant="h3">Filtered Items</Typography>
            <Outlet />
         </Container>
      </React.Fragment>
   );
};

export default RecipesPage;
