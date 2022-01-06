import { Card, Grid, Typography } from "@mui/material";
import React from "react";

interface RecipeProps {
   title: string;
   description: string;
   rating: number;
}

export const Recipe: React.FC<RecipeProps> = ({
   title,
   description,
   rating,
}) => {
   return (
      <Card sx={{ padding: 2 }}>
         <Typography component="h4" variant="h4">
            {title}
         </Typography>
         <Typography variant="body1">{description}</Typography>
         <Typography variant="h4">{rating}</Typography>
      </Card>
   );
};
