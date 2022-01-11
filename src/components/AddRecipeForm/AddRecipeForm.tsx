import React from "react";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import * as yup from "yup";
import { Box } from "@mui/material";

interface Props {}

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
      // const recipe = new RecipeClass(
      //    values.name,
      //    values.category,
      //    values.instructions,
      // );
      // console.log(recipe);
      // SEND A POST REQUEST TO DATABASE
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
                     <label>Recipe Name</label>
                     <Field id="name" name="name" />
                  </div>
                  <div>
                     <label>Category</label>
                     <Field as="select" id="category" name="category">
                        <option value="dessert">dessert</option>
                        <option value="breakfast">breakfast</option>
                        <option value="dinner">dinner</option>
                     </Field>
                  </div>
                  <div>
                     <label>Instructions to follow</label>
                     <Field
                        as="textarea"
                        id="instructions"
                        name="instructions"
                     />
                  </div>

                  <button type="submit">Create recipe</button>
               </Form>
            </Formik>
         </Box>
      </React.Fragment>
   );
};

export default AddRecipeForm;
