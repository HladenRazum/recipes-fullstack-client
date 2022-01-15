import { Box, CSSObject, Typography } from "@mui/material";
import React from "react";

interface Props { }


const Header = (props: Props) => {
   return (
      <Box sx={{ marginBottom: 7 }}>
         <Typography variant="h2" textAlign="center">
            Meals Recipes
         </Typography>
         <Typography fontSize={23} variant="subtitle1" textAlign="center" >Find interesting and delicous recipes and become a masterchef in your kitchen.</Typography>
      </Box>
   );
};

export default Header;
