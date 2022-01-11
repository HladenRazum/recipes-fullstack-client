import { IdType } from ".";
export interface Identifiable {
   _id?: IdType;
}

export class RecipeModel implements Identifiable {
   public _id?: IdType = undefined;
   constructor(public name: string, public category: string, public instructions: string) {
   }
}