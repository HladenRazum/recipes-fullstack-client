import { FormikHelpers, useFormik } from "formik";
import * as yup from "yup";
import { CSSObject } from "@emotion/react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { UserClass, UsersAPI } from "../../repository/user-api";

interface Props { }

interface FormikValues {
   username: string;
   password: string;
   email: string;
}

interface FormikErrors {
   username?: string;
   password?: string;
   email?: string;
}

const inputStyles: CSSObject = {
   marginBottom: 2,
};

const initialValues: FormikValues = {
   username: "",
   password: "",
   email: "",

};

const validationSchema = yup.object({});

const UserLoginForm = (props: Props) => {
   const submitHandler = (
      values: FormikValues,
      actions: FormikHelpers<FormikValues>
   ) => {
      const currentUser: UserClass = {
         username: values.username,
         email: values.email,
         password: values.password
      };
      // Validate from the server
      // Login the user
      UsersAPI.login(currentUser);
      // Update UI 
   };

   const validate = async (values: FormikValues) => {
      try {
         const response = await fetch("http://localhost:9000/api/users");
      } catch (error) {

      }
   };

   const formik = useFormik({
      initialValues,
      validationSchema,
      onSubmit: submitHandler,
      validate
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
            error={formik.touched.username && Boolean(formik.errors.username)}
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
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
         />
         <Link to="/password-reset">
            <Typography variant="body1" color="info.main">
               Forgot Password
            </Typography>
         </Link>

         <Button disabled={!formik.isValid} type="submit" variant="contained" sx={{ my: 3 }}>
            Submit
         </Button>
      </form>
   );
};

export default UserLoginForm;
