import { FormikHelpers, useFormik } from "formik";
import * as yup from "yup";
import { CSSObject } from "@emotion/react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {}

interface FormikValues {
   username: string;
   password: string;
}

interface FormikErrors {
   username?: string;
   password?: string;
}

const inputStyles: CSSObject = {
   marginBottom: 2,
};

const initialValues: FormikValues = {
   username: "",
   password: "",
};

const validationSchema = yup.object({});

const UserLoginForm = (props: Props) => {
   const submitHandler = (
      values: FormikValues,
      actions: FormikHelpers<FormikValues>
   ) => {
      // Validate from the server
      // Login the user
      // Call the function from redux
   };

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

         <Button type="submit" variant="contained" sx={{ my: 3 }}>
            Submit
         </Button>
      </form>
   );
};

export default UserLoginForm;
