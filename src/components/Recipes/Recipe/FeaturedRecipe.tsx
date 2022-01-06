import { Typography } from "@mui/material";
import React from "react";

interface Props {}

const FeaturedRecipe = (props: Props) => {
   return (
      <div>
         <Typography variant="h3">Featured Recipe</Typography>
         <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minima
            alias optio natus animi itaque impedit, corporis quam eum, modi,
            ratione obcaecati? Dicta esse commodi recusandae, laudantium minus
            amet accusamus velit et mollitia facere ab odio tempore libero
            dignissimos eaque earum sapiente sint. Aliquid?
         </Typography>
         <Typography variant="h3">10</Typography>
      </div>
   );
};

export default FeaturedRecipe;
