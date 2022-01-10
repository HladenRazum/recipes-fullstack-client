import React from "react";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import * as yup from "yup";
import { Box } from "@mui/material";
import { RecipeClass } from "../../repository/recipe-repository";
import { addNewRecipe } from "../../api/index";

interface Props { }

interface FormikValues {
   name: string;
   category: string;
   instructions: string;
   // image: string;
   // ingredient1: string;
   // ingredient2: string;
   // ingredient3: string;
   // ingredientMeasure1: string;
   // ingredientMeasure2: string;
   // ingredientMeasure3: string;
}

const validationSchema = yup.object({
   name: yup.string().required("Name is required"),
   // image: yup.string().required("Image is required"),
   instructions: yup
      .string()
      .required("Instructions are required")
      .min(2, "Instructions must be at least 20 characters long"),

   // ingredient1: yup.string().required("Ingredient is required"),
   // ingredient2: yup.string().required("Ingredient is required"),
   // ingredient3: yup.string().required("Ingredient is required"),

   // ingredientMeasure1: yup.string().required("Ingredient is required"),
   // ingredientMeasure2: yup.string().required("Ingredient is required"),
   // ingredientMeasure3: yup.string().required("Ingredient is required"),
});

const initialValues: FormikValues = {
   name: "",
   category: "",
   instructions: "",
};

const AddRecipeForm = (props: Props) => {
   const submitHandler = (
      values: FormikValues,
      actions: FormikHelpers<FormikValues>
   ) => {
      const recipe = new RecipeClass(
         values.name,
         values.category,
         values.instructions,
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
               validationSchema={validationSchema}
            >
               <Form>
                  <div>
                     <Field id="name" name="name" placeholder="Name" />
                     <ErrorMessage name="name" />
                  </div>
                  <div>
                     <Field as="select" id="category" name="category">
                        <option value="dessert">dessert</option>
                        <option value="breakfast">breakfast</option>
                        <option value="dinner">dinner</option>
                     </Field>
                  </div>
                  <div>
                     <Field
                        as="textarea"
                        id="instructions"
                        name="instructions"
                        placeholder="Insrtuctions"
                     />
                     <ErrorMessage name="content" />
                  </div>
                  <button type="submit">Create recipe</button>
               </Form>
            </Formik>
         </Box>
      </React.Fragment>
   );
};

export default AddRecipeForm;
