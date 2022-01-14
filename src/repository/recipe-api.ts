import { ApiClient, IdType, processResponse } from ".";
import { RecipeModel } from "./recipe-model";

export const BASE_URL = "http://localhost:9000/api/recipes";

class RecipesRepo implements ApiClient<RecipeModel> {
   async getAllItems(): Promise<RecipeModel[]> {
      return processResponse(fetch(BASE_URL));
   }

   async createItem(T: RecipeModel): Promise<RecipeModel> {
      const formData = new FormData();
      formData.append("name", T.name);
      formData.append("instructions", T.instructions);
      formData.append("ingredients", JSON.stringify(T.ingredients));
      formData.append("category", T.category);
      formData.append("recipe_img", T.recipe_img);
      return processResponse(
         fetch(BASE_URL, {
            method: "POST",
            body: formData,
         })
      );
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
