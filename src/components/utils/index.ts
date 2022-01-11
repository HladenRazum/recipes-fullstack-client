import { IngredientsModel } from "../../repository/recipe-model";

// let ingredientArrays: IngredientsModel[] = [];
// const ingredientsArray = values.ingredients.trim().split("\n");
// ingredientsArray.forEach((ingredientString) => {
//    const ingredientCouple = ingredientString.trim().split(" - ");
//    const ingredient: IngredientsModel = {
//       ingredientName: ingredientCouple[0],
//       ingredientPortion: ingredientCouple[1],
//    };
//    ingredientArrays.push(ingredient);
// });


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

