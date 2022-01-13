import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";


interface Props { }

const NotFoundPage = (props: Props) => {
   const navigate = useNavigate();
   const navigateBack = () => {
      navigate(-1);
   };

   return (
      <React.Fragment>
         <Container>
            <Typography textAlign="center" variant="h1">
               404
            </Typography>
            <Typography variant="body1" textAlign="center">
               Could not find the resource that you've been looking for.
            </Typography>
            <Button
               onClick={navigateBack}
               variant="contained"
               sx={{
                  display: "block",
                  margin: "3em auto",
               }}
            >
               Back
            </Button>

         </Container>
      </React.Fragment>
   );
};

export default NotFoundPage;
