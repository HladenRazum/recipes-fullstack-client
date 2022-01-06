import { Container, Typography } from "@mui/material";
import React from "react";

interface Props {}

const SingleRecipePage = (props: Props) => {
   return (
      <React.Fragment>
         <Container>
            <Typography textAlign="center" variant="h3">
               Single Recipe Page
            </Typography>
         </Container>
      </React.Fragment>
   );
};

export default SingleRecipePage;
