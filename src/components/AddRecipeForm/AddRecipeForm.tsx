import React, { ChangeEvent, ChangeEventHandler, SyntheticEvent } from "react";
import { FormikHelpers, useFormik } from "formik";
import * as yup from "yup";
import { Button, MenuItem, Paper, TextField, Typography } from "@mui/material";
import { CSSObject } from "@emotion/react";
import { RecipesAPI } from "../../repository/recipe-api";
import { IngredientsModel, RecipeModel } from "../../repository/recipe-model";
import { getValuePairsFromStringOfIngredients } from "../utils";
import PreviewImage from "./PreviewImage/PreviewImage";

const SUPPORTED_FORMATS = "image/png, image/jpeg";

interface Props {}

interface FormikValues {
   name: string;
   instructions: string;
   category: string;
   recipe_img: Blob | null;
   ingredients: string;
}

const validationSchema = yup.object({
   name: yup.string().required("Name is required"),
   recipe_img: yup
      .mixed()
      .nullable()
      .required()
      .test(
         "FILE_SIZE",
         "Uploaded file's size is too big.",
         (value) => !value || (value && value.size <= 1024 * 1024)
      )
      .test(
         "FILE_FORMAT",
         "Uplaoded file has unsupported format.",
         (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
      ),
   instructions: yup
      .string()
      .required("Instructions are required")
      .min(3, "Instructions must be at least 20 characters long"),
});

const initialValues: FormikValues = {
   name: "",
   instructions: "",
   category: "",
   recipe_img: null,
   ingredients: "",
};

const AddRecipeForm = (props: Props) => {
   const submitHandler = (
      values: FormikValues,
      actions: FormikHelpers<FormikValues>
   ) => {
      // used a helper function to convert data from ingredients String to arrays of Ingredients
      const ingredientArrays: IngredientsModel[] =
         getValuePairsFromStringOfIngredients(values.ingredients);

      if (values.recipe_img === null) return;
      console.log(ingredientArrays);

      const recipe: RecipeModel = {
         name: values.name,
         instructions: values.instructions,
         ingredients: ingredientArrays,
         category: values.category,
         recipe_img: values.recipe_img,
      };

      RecipesAPI.createItem(recipe)
         .then((data) => {
            console.log(data);
         })
         .catch((error) => {
            console.log(error);
         });

      // actions.resetForm();
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
      margin: "1em 0",
   };

   return (
      <React.Fragment>
         <Button
            sx={{ marginBottom: 2 }}
            color="info"
            type="button"
            onClick={() => {
               formik.resetForm();
            }}
         >
            Reset Form
         </Button>

         <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
            <input
               type="file"
               required
               accept={SUPPORTED_FORMATS}
               id="recipe_img"
               name="recipe_img"
               onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  if (e.target.files === null) {
                     return;
                  }
                  formik.setFieldValue("recipe_img", e.target.files[0]);
               }}
            />
            {formik.values.recipe_img && (
               <PreviewImage file={formik.values.recipe_img} />
            )}
            {/* Need to handle the error */}
            {formik.errors.recipe_img && (
               <Typography variant="subtitle1" color="error">
                  {formik.errors.recipe_img}
               </Typography>
            )}
            <br />
            <TextField
               select
               label="Category"
               required
               name="category"
               id="category"
               value={formik.values.category}
               onChange={formik.handleChange}
               error={
                  formik.touched.category && Boolean(formik.errors.category)
               }
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
               minRows={6}
               multiline
               fullWidth
               label="Instructions"
               required
               name="instructions"
               id="instructions"
               value={formik.values.instructions}
               onChange={formik.handleChange}
               error={
                  formik.touched.instructions &&
                  Boolean(formik.errors.instructions)
               }
               helperText={
                  formik.touched.instructions && formik.errors.instructions
               }
               size="small"
               sx={inputStyles}
            />

            <TextField
               minRows={6}
               multiline
               fullWidth
               label="Ingredients (1 pair per row) / ex: Water - 200ml"
               required
               name="ingredients"
               id="ingredients"
               value={formik.values.ingredients}
               onChange={formik.handleChange}
               error={
                  formik.touched.ingredients &&
                  Boolean(formik.errors.ingredients)
               }
               helperText={
                  formik.touched.ingredients && formik.errors.ingredients
               }
               size="small"
               sx={inputStyles}
            />

            <Button variant="contained" type="submit">
               Create recipe
            </Button>
         </form>
      </React.Fragment>
   );
};

export default AddRecipeForm;
