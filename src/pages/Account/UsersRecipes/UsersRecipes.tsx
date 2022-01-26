import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { RecipesAPI } from "../../../repository/recipe-api";
import { RecipeModel } from "../../../repository/recipe-model";
import { useAppSelector } from "../../../store/hooks";

interface Props {}

const UsersRecipes = (props: Props) => {
   const [userRecipes, setUserRecipes] = useState<RecipeModel[]>([]);

   const userId = useAppSelector((state) => state.user.user?.user.id);

   useEffect(() => {
      RecipesAPI.getAllRecipesFromSameUser(`?createdBy=${userId}`).then(
         (data) => {
            if (data) {
               setUserRecipes(data);
               console.log(userRecipes);
            } else {
               return;
            }
         }
      );
   }, []);

   return (
      <Container>
         <Typography variant="h3">Your Recipes</Typography>
         {userRecipes && userRecipes.length > 0 && (
            <ul>
               {userRecipes.map((recipe) => (
                  <li key={recipe._id}>
                     <h5>{recipe.name}</h5>
                     <p>{recipe.instructions}</p>
                  </li>
               ))}
            </ul>
         )}
         {!userRecipes.length && (
            <p>Could not find any recipes created with this account.</p>
         )}
      </Container>
   );
};

export default UsersRecipes;
