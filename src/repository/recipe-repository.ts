export class RecipeClass {
   constructor(
      public name: string,
      public category: string,
      public image: string,
      public instructions: string,
      public ingredient1: string,
      public ingredient2: string,
      public ingredient3: string,
      public ingredientMeasure1: string,
      public ingredientMeasure2: string,
      public ingredientMeasure3: string,

      public ingredient4?: string,
      public ingredient5?: string,
      public ingredient6?: string,
      public ingredient7?: string,
      public ingredient8?: string,
      public ingredient9?: string,
      public ingredient10?: string,
      public ingredientMeasure4?: string,
      public ingredientMeasure5?: string,
      public ingredientMeasure6?: string,
      public ingredientMeasure7?: string,
      public ingredientMeasure8?: string,
      public ingredientMeasure9?: string,
      public ingredientMeasure10?: string
   ) {}
}
