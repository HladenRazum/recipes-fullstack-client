import React, { ReactNode } from "react";
import { Paper } from "@mui/material";

interface Props {
   children?: ReactNode;
}

const StyledPaper = (props: Props) => {
   return (
      <Paper
         sx={{
            maxWidth: 480,
            padding: 3,
            margin: "0 auto",
         }}
      >
         {props.children}
      </Paper>
   );
};

export default StyledPaper;
