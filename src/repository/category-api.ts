import { IdType } from "./api";

export interface Category {
   name: string;
   _id: IdType;
}

interface API {
   getAllCategories(): Promise<Category[]>;
}

// class CategoryClass implements API{
//    constructor(public categoryName: string) {}
// }

class CategoryRepo implements API {
   async getAllCategories() {
      try {
         const response = await fetch("http://localhost:9000/api/categories");
         const data = await response.json();
         return data;
      } catch (error) {
         console.log(error);
      }
   }
}

export const CategoryAPI = new CategoryRepo();
