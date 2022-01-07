import axios from "axios";

const url = "localhost:9000/api/recipes";

export const getAllRecipes = async () => axios.get(url);
export const addNewRecipe = async (body: object) => axios.post(url, body);
