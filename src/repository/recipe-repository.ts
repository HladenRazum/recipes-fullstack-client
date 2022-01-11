import { IdType, IRecipe, Repository } from ".";

export class Recipe implements IRecipe, Repository<IRecipe, IdType> {
   constructor(
      public name: string,
      public instructions: string,
      public category: string,
      public _id?: IdType | undefined
   ) {}
   async add(item: IRecipe) {
      try {
         const response = await fetch("URL");
         return await response.json();
      } catch (error) {
         console.log(error);
      }
   }

   async removeById(id: IdType) {
      try {
         const response = await fetch("URL");
         return await response.json();
      } catch (error) {
         console.log(error);
      }
   }

   async updateByID(id: IdType) {
      try {
         const response = await fetch("URL");
         return await response.json();
      } catch (error) {
         console.log(error);
      }
   }

   async getAllItems(items: IRecipe[]) {
      try {
         const response = await fetch("URL");
         return await response.json();
      } catch (error) {
         console.log(error);
      }
   }
}
