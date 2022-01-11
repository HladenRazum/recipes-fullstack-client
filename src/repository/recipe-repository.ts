export class RecipeClass {
   constructor(
      public name: string,
      public category: string,
      public instructions: string,
      public ingredient1: string,
      public ingredient2: string,
      public ingredient3: string,
      public ingredientMeasure1: string,
      public ingredientMeasure2: string,
      public ingredientMeasure3: string // public ingredient4?: string, // public ingredient5?: string,
   ) {}
}
