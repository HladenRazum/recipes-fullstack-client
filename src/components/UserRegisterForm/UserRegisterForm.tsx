import { Button, CSSObject, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { UserClass, UsersAPI } from "../../repository/user-api";

interface Props {}

interface MyFormValues {
   username: string;
   // email: string;
   password: string;
}

let initialValues: MyFormValues;

initialValues = {
   username: "",
   // email: "",
   password: "",
};

const validationSchema = yup.object({
   username: yup
      .string()
      .required("Username is required")
      .min(1, "Username must be at least 1 characters long"),
   password: yup
      .string()
      .required("Password is required")
      .min(1, "Password must be at least 1 characters long."),
   // email: yup.string().email("Invalid Email").required("Email is required"),
});

const UserRegisterForm = () => {
   const submitHandler = (values: MyFormValues) => {
      // Send a POST request
      const newUser: UserClass = {
         username: values.username,
         // email: values.email,
         password: values.password,
      };
      UsersAPI.register(newUser);
      // Redirect the user to login page OR show wrong credentials message
   };
   const inputStyles: CSSObject = {
      marginBottom: 2,
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

         {/* <TextField
            sx={inputStyles}
            label="Email"
            fullWidth
            size="small"
            id="email"
            name="email"
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
         /> */}

         <Button type="submit" variant="contained" sx={{ my: 3 }}>
            Submit
         </Button>
      </form>
   );
};

export default UserRegisterForm;
