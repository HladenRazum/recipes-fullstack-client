import { ApiClient, IdType, processResponse } from ".";
import { RecipeModel } from "./recipe-modle";

export const BASE_URL = 'http://localhost:9000/api/recipes';



class RecipesRepo implements ApiClient<RecipeModel> {
   async getAllItems(): Promise<RecipeModel[]> {
      return processResponse(fetch(BASE_URL));
   }

   async createItem(T: RecipeModel): Promise<RecipeModel> {
      return processResponse(fetch(BASE_URL));
   }

   async findItemById(id: IdType): Promise<RecipeModel> {
      return processResponse(fetch(BASE_URL), id);
   }

   async updateItem(id: IdType): Promise<RecipeModel> {
      return processResponse(fetch(BASE_URL), id);
   }

   deleteItemById(id: IdType): Promise<RecipeModel> {
      return processResponse(fetch(BASE_URL), id);

   }
}


export const RecipesAPI: ApiClient<RecipeModel> = new RecipesRepo();