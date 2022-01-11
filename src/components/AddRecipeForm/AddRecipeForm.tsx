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
import { Box, Button, MenuItem, Paper, TextField } from "@mui/material";
import { CSSObject } from "@emotion/react";
import { RecipesAPI } from "../../repository/recipe-api";
import { RecipeModel } from "../../repository/recipe-modle";

interface Props { }

interface FormikValues {
   name: string;
   instructions: string;
   category: string;

}

const validationSchema = yup.object({
   name: yup.string().required("Name is required"),
   // image: yup.string().required("Image is required"),
   instructions: yup
      .string()
      .required("Instructions are required")
      .min(20, "Instructions must be at least 20 characters long"),
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
      const recipe = new RecipeModel(values.name,
         values.category,
         values.instructions);

      RecipesAPI.createItem(recipe).then((data: RecipeModel) => {
         console.log(data);
      });

      // const recipe = new Recipe(
      //    values.name,
      //    values.instructions,
      //    values.category
      // );
      // console.log(recipe);
      // SEND A POST REQUEST TO DATABASE
   };

   const CATEGORIES = ["dessert", "lunch", "dinner", "breakfast"];
   const categoryOptions = CATEGORIES.map((option) => (
      <MenuItem key={option} value={option.toLocaleLowerCase()}>
         {option}
      </MenuItem>

   ));

   const formik = useFormik({
      initialValues,
      validationSchema,
      onSubmit: submitHandler,
   });

   const inputStyles: CSSObject = {
      marginBottom: 2,
   };

   const selectStyles: CSSObject = {
      minWidth: 150,
      marginBottom: 2,
   };

   return (
      <React.Fragment>
         <Paper
            sx={{
               maxWidth: 600,
               padding: 2,
            }}
         >
            <form onSubmit={formik.handleSubmit}>


               <TextField
                  select
                  label="Category"
                  required
                  name="category"
                  id="category"
                  value={formik.values.category}
                  onChange={formik.handleChange}
                  error={formik.touched.category && Boolean(formik.errors.category)}
                  helperText={formik.touched.category && formik.errors.category}
                  size="small"
                  sx={selectStyles}

               >
                  {categoryOptions}
               </TextField>

               <TextField
                  fullWidth
                  label="Recipe Name"
                  required
                  name="name"
                  id="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  size="small"
                  sx={inputStyles}
               />

               <TextField
                  fullWidth
                  label="Instructions"
                  required
                  name="instructions"
                  id="instructions"
                  value={formik.values.instructions}
                  onChange={formik.handleChange}
                  error={formik.touched.instructions && Boolean(formik.errors.instructions)}
                  helperText={formik.touched.instructions && formik.errors.instructions}
                  size="small"
                  sx={inputStyles}
               />

               <Button variant="contained" type="submit">Create recipe</Button>

            </form>


         </Paper>
      </React.Fragment >
   );
};

export default AddRecipeForm;
