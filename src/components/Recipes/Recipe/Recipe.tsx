import { Button, Card, Grid, Typography } from "@mui/material";
import React from "react";

interface RecipeProps {
   title: string;
   description: string;
}

export const Recipe: React.FC<RecipeProps> = ({ title, description }) => {
   return (
      <Card sx={{ padding: 2 }}>
         <Typography component="h4" variant="h4">
            {title}
         </Typography>
         <Typography variant="body1">{description}</Typography>
         <Button variant="contained">Delete Recipe</Button>
      </Card>
   );
};
