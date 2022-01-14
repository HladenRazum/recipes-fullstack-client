import { IdType } from ".";
export interface Identifiable {
   _id?: IdType;
}

export interface IngredientsModel {
   ingredientName: string;
   ingredientPortion: string;
}

interface IRecipe {
   name: string;
   category: string;
   instructions: string;
   recipe_img: string;
   ingredients: IngredientsModel[];
}

export class RecipeModel implements Identifiable {
   public _id?: IdType = undefined;
   constructor(
      public name: string,
      public category: string,
      public instructions: string,
      public recipe_img: Blob,
      public ingredients: IngredientsModel[]
   ) {}
}
