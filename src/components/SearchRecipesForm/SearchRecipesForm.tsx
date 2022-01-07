import React from "react";

interface Props {}

/**
 * 1. Should fetch data from the API
 * 2. Redirect to "/recipes" with the result
 *
 * @param props
 * @returns
 */

const SearchRecipesForm = (props: Props) => {
   return (
      <form>
         <label htmlFor="search">Search Recipe</label>
         <input type="text" name="search" />
         <button>Search Icon Here</button>
      </form>
   );
};

export default SearchRecipesForm;
