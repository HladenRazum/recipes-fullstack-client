import { IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import React from "react";
import { IRecipe } from "../../../repository/recipe-model";
import InfoIcon from "@mui/icons-material/Info";

interface RecipeProps extends IRecipe {}

export const SingleRecipe: React.FC<RecipeProps> = ({
   name,
   instructions,
   url,
}) => {
   return (
      <ImageListItem>
         <img src={url} alt={name} loading="lazy" />

         <ImageListItemBar
            title={name}
            subtitle={instructions}
            actionIcon={
               <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${name}`}
               >
                  <InfoIcon />
               </IconButton>
            }
         />
      </ImageListItem>
   );
};
