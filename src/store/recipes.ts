import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Recipe {
   name: string;
   instructions: string;
}

interface RecipesState {
   value: Recipe[];
}

const initialState: RecipesState = {
   value: []
};

export const recipesSlice = createSlice({
   name: "recipes",
   initialState: initialState,
   reducers: {
      addRecipe: (state, action: PayloadAction<Recipe>) => {
         state.value.push(action.payload);
      }
   }
});

export const recipesActions = recipesSlice.actions;
export default recipesSlice.reducer;