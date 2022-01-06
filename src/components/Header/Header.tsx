import { Box, CSSObject } from "@mui/material";
import React from "react";

interface Props {}

const boxStyles: CSSObject = {
   height: 300,
   width: "100%",
   background: "linear-gradient(to right, #d47272, #940c4b)",
   margin: "3em auto",
};

const Header = (props: Props) => {
   return <Box sx={boxStyles}></Box>;
};

export default Header;
