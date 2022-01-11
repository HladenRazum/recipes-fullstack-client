import React from "react";
import {
   ErrorMessage,
   Field,
   Form,
   Formik,
   FormikHelpers,
   useFormik,
} from "formik";
import * as yup from "yup";
import { Box, TextField } from "@mui/material";
import { Recipe } from "../../repository/recipe-repository";

interface Props {}

interface FormikValues {
   name: string;
   instructions: string;
   category: string;
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
   instructions: "",
   category: "",
};

const AddRecipeForm = (props: Props) => {
   const submitHandler = (
      values: FormikValues,
      actions: FormikHelpers<FormikValues>
   ) => {
      const recipe = new Recipe(
         values.name,
         values.instructions,
         values.category
      );
      console.log(recipe);
      // SEND A POST REQUEST TO DATABASE
   };

   const CATEGORIES = ["dessert", "lunch", "dinner", "breakfast"];
   const categoryOptions = CATEGORIES.map((category) => (
      <option key={category} value={category.toLowerCase()}>
         {category}
      </option>
   ));

   const formik = useFormik({
      initialValues,
      validationSchema,
      onSubmit: submitHandler,
   });

   return (
      <React.Fragment>
         <Box
            sx={{
               maxWidth: 600,
            }}
         >
            <form onSubmit={formik.handleSubmit}>
               <TextField
                  label="Recipe Name"
                  required
                  name="name"
                  id="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
               />
            </form>

            {/* <Formik
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
                        <option value="default" disabled>
                           Select a category...
                        </option>
                        {categoryOptions}
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
            </Formik> */}
         </Box>
      </React.Fragment>
   );
};

export default AddRecipeForm;
