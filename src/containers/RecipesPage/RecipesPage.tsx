import { Container, Typography } from "@mui/material";
import React from "react";

interface Props {}

const RecipesPage = (props: Props) => {
   return (
      <React.Fragment>
         <Container>
            <Typography textAlign="center" variant="h3">
               Recipes Page
            </Typography>
         </Container>
      </React.Fragment>
   );
};

export default RecipesPage;
