import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import React, { useEffect, useState } from "react";
import { RecipesAPI } from '../../../repository/recipe-api';
import { IRecipe } from '../../../repository/recipe-model';

function srcset(image: string, width: number, height: number, rows = 1, cols = 1) {
   return {
      src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${width * cols}&h=${height * rows
         }&fit=crop&auto=format&dpr=2 2x`,
   };
}

interface Props { }
const FeaturedRecipe = (props: Props) => {
   const [allRecipes, setAllRecipes] = useState<IRecipe[]>([]);

   const getAllRecipes = async () => {
      try {
         const data = await RecipesAPI.getAllItems();
         if (data) {
            setAllRecipes(data);
            // show notification
         }
      } catch (error) {
         console.log(error);
         // show notification
      }
   };

   useEffect(() => {
      getAllRecipes();
   }, []);


   return (
      <ImageList
         sx={{
            width: 820,
            height: 780,
            // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
            transform: 'translateZ(0)',
         }}
         rowHeight={430}
         gap={1}
      >
         {allRecipes.map((item) => {
            const cols = item.featured ? 2 : 1;
            const rows = item.featured ? 2 : 1;

            return (
               <ImageListItem key={item._id} cols={cols} rows={rows}>
                  <img
                     {...srcset(item.url!, 430, 420, rows, cols)}
                     alt={item.name}
                     loading="lazy"
                  />
                  <ImageListItemBar
                     sx={{
                        background:
                           'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                           'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                     }}
                     title={item.name}
                     position="top"
                     actionIcon={
                        <IconButton
                           sx={{ color: 'white' }}
                           aria-label={`star ${item.name}`}
                        >
                           <StarBorderIcon />
                        </IconButton>
                     }
                     actionPosition="left"
                  />
               </ImageListItem>
            );
         })}
      </ImageList>
   );
};

export default FeaturedRecipe;
