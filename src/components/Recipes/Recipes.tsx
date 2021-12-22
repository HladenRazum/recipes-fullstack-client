import React from 'react'
import { Recipe } from './Recipe/Recipe'

interface RecipesProps {}

export const Recipes = (props: RecipesProps) => {
  return (
    <div>
      <Recipe />
      <Recipe />
      <Recipe />
      <Recipe />
      <Recipe />
    </div>
  )
}
