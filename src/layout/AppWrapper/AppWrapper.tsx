import { Box } from "@mui/system";
import React, { ReactNode } from "react";

interface Props {
   children: ReactNode | ReactNode[];
}

const AppWrapper = (props: Props) => {
   return (
      <Box
         sx={{
            backgroundColor: "#dddddd",
            width: "100%",
            minHeight: "100vh",
         }}
      >
         {props.children}
      </Box>
   );
};

export default AppWrapper;
