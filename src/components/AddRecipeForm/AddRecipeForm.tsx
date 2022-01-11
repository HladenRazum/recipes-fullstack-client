import React from "react";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import * as yup from "yup";
import { Box } from "@mui/material";
import { RecipeClass } from "../../repository/recipe-repository";

import { addNewRecipe } from "../../api/index";

interface Props {}

interface FormikValues {
   name: string;
   category: string;
   image: string;
   instructions: string;
   ingredient1: string;
   ingredient2: string;
   ingredient3: string;
   ingredientMeasure1: string;
   ingredientMeasure2: string;
   ingredientMeasure3: string;
}

const validationSchema = yup.object({
   name: yup.string().required("Name is required"),
   image: yup.string().required("Image is required"),
   instructions: yup
      .string()
      .required("Instructions are required")
      .min(2, "Instructions must be at least 20 characters long"),
   ingredient1: yup.string().required("Ingredient is required"),
   ingredient2: yup.string().required("Ingredient is required"),
   ingredient3: yup.string().required("Ingredient is required"),
   ingredientMeasure1: yup.string().required("Ingredient is required"),
   ingredientMeasure2: yup.string().required("Ingredient is required"),
   ingredientMeasure3: yup.string().required("Ingredient is required"),
});

const initialValues: FormikValues = {
   name: "",
   category: "",
   image: "",
   instructions: "",
   ingredient1: "",
   ingredient2: "",
   ingredient3: "",
   ingredientMeasure1: "",
   ingredientMeasure2: "",
   ingredientMeasure3: "",
};

const AddRecipeForm = (props: Props) => {
   const submitHandler = (
      values: FormikValues,
      actions: FormikHelpers<FormikValues>
   ) => {
      const recipe = new RecipeClass(
         values.name,
         values.category,
         values.image,
         values.instructions,
         values.ingredient1,
         values.ingredient2,
         values.ingredient3,
         values.ingredientMeasure1,
         values.ingredientMeasure2,
         values.ingredientMeasure3
      );

      console.log(recipe);

      // SEND A POST REQUEST TO DATABASE
      addNewRecipe(recipe);
   };

   return (
      <React.Fragment>
         <Box
            sx={{
               maxWidth: 600,
            }}
         >
            <Formik
               initialValues={initialValues}
               onSubmit={submitHandler}
               // validationSchema={validationSchema}
            >
               <Form>
                  <div>
                     <label>Recipe Name</label>
                     <Field id="name" name="name" />
                  </div>
                  <div>
                     <label>Category</label>
                     <Field as="select" name="category" id="category">
                        <option value="Desserts">Desserts</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Launch">Launch</option>
                     </Field>
                  </div>
                  <div>
                     <label>Instructions</label>
                     <Field
                        as="textarea"
                        id="instructions"
                        name="instructions"
                     />
                  </div>
                  <div>
                     <label>Image url</label>
                     <Field id="image" name="image" />
                  </div>

                  <div>
                     <label>Ingedient</label>
                     <Field id="ingredient1" name="ingredient1" />
                  </div>

                  <div>
                     <label>Ingedient</label>
                     <Field id="ingredient2" name="ingredient2" />
                  </div>

                  <div>
                     <label>Ingedient</label>
                     <Field id="ingredient3" name="ingredient3" />
                  </div>

                  <div>
                     <label>ingredient Measure</label>
                     <Field id="ingredientMeasure1" name="ingredientMeasure1" />
                  </div>
                  <div>
                     <label>ingredient Measure</label>
                     <Field id="ingredientMeasure2" name="ingredientMeasure2" />
                  </div>
                  <div>
                     <label>ingredient Measure</label>
                     <Field id="ingredientMeasure3" name="ingredientMeasure3" />
                  </div>
                  <button type="submit">Create recipe</button>
               </Form>
            </Formik>
         </Box>
      </React.Fragment>
   );
};

export default AddRecipeForm;
