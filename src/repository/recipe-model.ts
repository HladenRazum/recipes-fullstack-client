import { IdType } from ".";
export interface Identifiable {
   _id?: IdType;
}

export interface IngredientsModel {
   ingredientName: string;
   ingredientPortion: string;
}

export interface IRecipe {
   name: string;
   category: string;
   instructions: string;
   recipe_img: string | File;
   ingredients: IngredientsModel[];
   featured?: boolean;
   url?: string;
   _id?: IdType | undefined;
}

export class RecipeModel implements Identifiable {
   public _id?: IdType = undefined;
   public url?: string;
   constructor(
      public name: string,
      public category: string,
      public instructions: string,
      public recipe_img: string | File,
      public ingredients: IngredientsModel[]
   ) {}
}
