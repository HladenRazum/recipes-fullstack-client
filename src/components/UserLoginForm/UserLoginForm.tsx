import { Field, Form, Formik } from "formik";
import React from "react";

interface Props {}

const UserLoginForm = (props: Props) => {
   return (
      <Formik initialValues={{}} onSubmit={() => {}}>
         <Form>
            <Field placeholder="username" id="username" name="username" />
            <Field
               placeholder="password"
               id="password"
               name="passwod"
               type="password"
            />
            <button type="submit">Login</button>
         </Form>
      </Formik>
   );
};

export default UserLoginForm;
