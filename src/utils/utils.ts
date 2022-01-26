
import { IngredientsModel } from "../repository/recipe-model";

export const getValuePairsFromStringOfIngredients = (targetString: string): IngredientsModel[] | [] => {
   let valuePairsArray: IngredientsModel[] = [];

   let arrayOfStringPairs = targetString.trim().split("\n");
   arrayOfStringPairs.forEach((singleString) => {
      const pair = singleString.trim().split(" - ");
      const ingredient = {
         ingredientName: pair[0],
         ingredientPortion: pair[1],
      };
      valuePairsArray.push(ingredient);
   });
   return valuePairsArray;
};

