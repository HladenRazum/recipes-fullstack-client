import React from "react";

interface Props {}

const AddRecipeForm = (props: Props) => {
   return (
      <React.Fragment>
         <h3>Add new Recipe FORM</h3>
         <form>
            <input type="text" placeholder="Recipe title..." />
         </form>
      </React.Fragment>
   );
};

export default AddRecipeForm;
