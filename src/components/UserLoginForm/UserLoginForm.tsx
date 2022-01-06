import React from "react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { useDispatch } from "react-redux";
import { authenticationActions } from "../../store/auth";

interface Props {}

interface FormikValues {
   username: string;
   password: string;
}

interface FormikErrors {
   username?: string;
   password?: string;
}

const initialValues: FormikValues = {
   username: "",
   password: "",
};

const UserLoginForm = (props: Props) => {
   const dispatch = useDispatch();

   const submitHandler = (
      values: FormikValues,
      actions: FormikHelpers<FormikValues>
   ) => {
      // Login the user
      // Call the function from redux
   };

   return (
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
         <Form>
            <div>
               <label>username</label>
               <Field id="username" name="username" />
            </div>
            <div>
               <label>password</label>
               <Field id="password" name="password" type="password" />
            </div>
            <button type="submit">Login</button>
         </Form>
      </Formik>
   );
};

export default UserLoginForm;
