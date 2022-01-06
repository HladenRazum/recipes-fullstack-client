import { Grid, TextField } from "@mui/material";
import React, { FormEvent } from "react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import * as Yup from "yup";
import { UserClass, UserRoles } from "../../interfaces/user.interface";

interface Props {}

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

const handleSubmit = (
   values: MyFormValues,
   actions: FormikHelpers<MyFormValues>
) => {
   // Send a post request
   const user = new UserClass(
      values.username,
      values.password,
      values.email,
      "REGISTERED"
   );

   user.create();

   // Reset the form
   actions.resetForm();
};

const UserRegisterForm = (props: Props) => {
   return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
         <Form>
            <div>
               <label>Username</label>
               <Field
                  id="username"
                  name="username"
                  placeholder="Username"
                  // className="formik-field"
               />
            </div>
            <div>
               <label>Password</label>
               <Field
                  id="password"
                  name="password"
                  placeholder="password"
                  // className="formik-field"
               />
            </div>
            <div>
               <label>Email</label>
               <Field
                  id="email"
                  name="email"
                  placeholder="Email address"
                  className="formik-field"
               />
            </div>
            <button type="submit">Submit</button>
         </Form>
      </Formik>
   );
};

export default UserRegisterForm;
