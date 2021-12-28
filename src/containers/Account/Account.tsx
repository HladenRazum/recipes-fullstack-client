import { Container, Typography } from "@mui/material";
import React from "react";

interface Props {}

const Account = (props: Props) => {
   return (
      <React.Fragment>
         <Container>
            <Typography textAlign="center" variant="h3">
               Account Settings
            </Typography>
            <p>
               Here you can manage your profile settings and create/update your
               published recipes.
            </p>
         </Container>
      </React.Fragment>
   );
};

export default Account;
