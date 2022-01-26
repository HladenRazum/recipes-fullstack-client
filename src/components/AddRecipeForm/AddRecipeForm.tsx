import React, { ChangeEvent } from "react";
import { FormikHelpers, useFormik } from "formik";
import { Button, MenuItem, TextField, Typography } from "@mui/material";
import { CSSObject } from "@emotion/react";
import { RecipesAPI } from "../../repository/recipe-api";
import { IngredientsModel, RecipeModel } from "../../repository/recipe-model";
import { getValuePairsFromStringOfIngredients } from "../utils";
import PreviewImage from "./PreviewImage/PreviewImage";
import {
   recipesValidationSchema,
   SUPPORTED_FORMATS,
} from "./recipesValidationSchema";
import { useAppSelector } from "../../store/hooks";

const RECIPE_CATEGORIES = ["dessert", "lunch", "dinner", "breakfast"];

interface Props {}

interface FormikValues {
   name: string;
   instructions: string;
   category: string;
   recipe_img: File | null;
   ingredients: string;
}

const initialValues: FormikValues = {
   name: "",
   instructions: "",
   category: "",
   recipe_img: null,
   ingredients: "",
};

const inputStyles: CSSObject = {
   marginBottom: 2,
};

const selectStyles: CSSObject = {
   minWidth: 150,
   margin: "1em 0",
};

const AddRecipeForm = (props: Props) => {
   const userId = useAppSelector((state) => state.user.user?.user.id);

   const submitHandler = (
      values: FormikValues,
      actions: FormikHelpers<FormikValues>
   ) => {
      // used a helper function to convert data from ingredients String to arrays of Ingredients
      const ingredientArrays: IngredientsModel[] =
         getValuePairsFromStringOfIngredients(values.ingredients);

      if (values.recipe_img === null) return;
      if (!userId) return;

      const recipe: RecipeModel = {
         name: values.name,
         instructions: values.instructions,
         ingredients: ingredientArrays,
         category: values.category,
         recipe_img: values.recipe_img,
         createdBy: userId,
      };

      console.log(recipe);

      RecipesAPI.createItem(recipe)
         .then((data) => {
            // Show snackbar success
         })
         .catch((error) => {
            // setOpenSnackBar(true);
         });

      // actions.resetForm();
   };

   const categoryOptions = RECIPE_CATEGORIES.map((option) => (
      <MenuItem key={option} value={option.toLocaleLowerCase()}>
         {option}
      </MenuItem>
   ));

   const formik = useFormik({
      initialValues,
      validationSchema: recipesValidationSchema,
      onSubmit: submitHandler,
   });

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
