import { CSSObject, Grid, Paper, TextField, Button, Typography } from "@mui/material";
import React, { FormEvent } from "react";
import { Formik, Form, Field, FormikHelpers, useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";

interface Props { }

interface MyFormValues {
   username: string;
   email: string;
   password: string;
}

interface MyFormErrors {
   username?: string;
   email?: string;
   password?: string;
}

let initialValues: MyFormValues;

initialValues = {
   username: "",
   email: "",
   password: "",
};

const validationSchema = yup.object({
   username: yup
      .string()
      .required("Username is required")
      .min(5, "Username must be at least 5 characters long"),
   password: yup
      .string()
      .required("Password is required")
      .min(5, "Password must be at least 5 characters long."),
   // email: yup.required("Email is required"),
   //  server validation here
   // check if object is email
});

const submitHandler = (
   values: MyFormValues,
   actions: FormikHelpers<MyFormValues>
) => {
   console.log(values);
};
const inputStyles: CSSObject = {
   marginBottom: 2,
};

const UserRegisterForm = (props: Props) => {
   const formik = useFormik({
      initialValues,
      validationSchema,
      onSubmit: submitHandler,
   });

   return (

      <form onSubmit={formik.handleSubmit}>
         <TextField
            sx={inputStyles}
            label="Username"
            fullWidth
            size="small"
            id="username"
            name="username"
            onChange={formik.handleChange}
            error={
               formik.touched.username && Boolean(formik.errors.username)
            }
            helperText={formik.touched.username && formik.errors.username}
         />

         <TextField
            sx={inputStyles}
            label="Password"
            fullWidth
            size="small"
            id="password"
            name="password"
            onChange={formik.handleChange}
            error={
               formik.touched.password && Boolean(formik.errors.password)
            }
            helperText={formik.touched.password && formik.errors.password}
         />

         <TextField
            sx={inputStyles}
            label="Email"
            fullWidth
            size="small"
            id="email"
            name="email"
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
         />

         <Button type="submit" variant="contained" sx={{ my: 3 }}>
            Submit
         </Button>
      </form>


   );
};

export default UserRegisterForm;
