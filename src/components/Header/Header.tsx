import { Box, CSSObject, Typography } from "@mui/material";
import React from "react";

interface Props {}

const boxStyles: CSSObject = {
   height: 330,
   // width: "100%",
   background: "linear-gradient(to right, #feecd2, 64%,  #0a0a0a)",
   margin: "3em 1em",
};

const Header = (props: Props) => {
   return (
      <Box sx={boxStyles}>
         <Typography variant="h2" textAlign="center">
            Homepage
         </Typography>
      </Box>
   );
};

export default Header;
