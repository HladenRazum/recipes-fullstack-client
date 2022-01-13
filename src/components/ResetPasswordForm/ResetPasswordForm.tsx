import { TextField, Button, CSSObject } from "@mui/material";
import React from "react";

interface Props {}

const inputStyles: CSSObject = {
   marginBottom: 2,
};

const ResetPasswordForm = (props: Props) => {
   return (
      <React.Fragment>
         <form>
            <TextField
               sx={inputStyles}
               label="Enter the email on your account"
               fullWidth
               size="small"
               id="email"
               name="email"
            />
            <Button variant="contained">Reset my password</Button>
         </form>
      </React.Fragment>
   );
};

export default ResetPasswordForm;
