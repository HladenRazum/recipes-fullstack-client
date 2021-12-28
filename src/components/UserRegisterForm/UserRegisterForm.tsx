import { Grid, TextField } from "@mui/material";
import React, { FormEvent } from "react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import * as Yup from "yup";
import { UserClass, UserRoles } from "../../interfaces/user.interface";

interface Props {}

interface MyFormValues {
   username: string;
   firstname: string;
   lastname: string;
   email: string;
}

interface MyFormErrors {
   username?: string;
   firstname?: string;
   lastname?: string;
   email?: string;
}

let initialValues: MyFormValues;

initialValues = {
   username: "",
   firstname: "",
   lastname: "",
   email: "",
};

const handleSubmit = (
   values: MyFormValues,
   actions: FormikHelpers<MyFormValues>
) => {
   // Send a post request
   const user = new UserClass(
      values.username,
      values.firstname,
      values.lastname,
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
            <Field
               id="username"
               name="username"
               placeholder="Username"
               // className="formik-field"
            />

            <Field
               id="firstname"
               name="firstname"
               placeholder="First Name"
               // className="formik-field"
            />

            <Field
               id="lastname"
               name="lastname"
               placeholder="Last Name"
               // className="formik-field"
            />

            <Field
               id="email"
               name="email"
               placeholder="Email address"
               className="formik-field"
            />

            <button type="submit">Submit</button>
         </Form>
      </Formik>
   );
};

export default UserRegisterForm;
