import { IdType } from ".";
export interface Identifiable {
   _id?: IdType;
}

export interface IngredientsModel {
   ingredientName: string;
   ingredientPortion: string;
}

export class RecipeModel implements Identifiable {
   public _id?: IdType = undefined;
   constructor(
      public name: string,
      public category: string,
      public instructions: string,
      public image: File,
      public ingredients: IngredientsModel[]
   ) {}
}
