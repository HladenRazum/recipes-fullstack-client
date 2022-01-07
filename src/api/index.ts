// import axios from "axios";

import { RecipeClass } from "../repository/recipe-repository";
import { UserClass } from "../repository/user-repository";

const URL = "http://localhost:9000/api/recipes";

export const getAllRecipes = async () => {
   try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
   } catch (error) {
      console.log(error);
   }
};
export const addNewRecipe = async (bodyData: RecipeClass) => {
   try {
      const response = await fetch(URL, {
         method: "POST",
         body: JSON.stringify(bodyData),
         headers: {
            "Content-Type": "appliation/json",
         },
      });
      const data = await response.json();

      console.log(data);
   } catch (error) {
      console.log(error);
   }
};

// Users
export const addNewUser = async (bodyData: UserClass) => {
   try {
      const response = await fetch("http://localhost:9000/api/users", {
         method: "POST",
         body: JSON.stringify(bodyData),
         headers: {
            "Content-Type": "appliation/json",
         },
      });
      const data = await response.json();

      console.log(data);
   } catch (error) {
      console.log(error);
   }
};
