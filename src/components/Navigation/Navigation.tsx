import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { Button, Container } from "@mui/material";
import RecipeSearchForm from "../RecipeSearchForm/RecipeSearchForm";

interface Props {
   window?: () => Window;
}

interface Links {
   title: string;
   linkTo: string;
}

const links: Links[] = [
   {
      title: "home",
      linkTo: "/",
   },

   {
      title: "recipes",
      linkTo: "/recipes",
   },

   {
      title: "login",
      linkTo: "/login",
   },
   {
      title: "register",
      linkTo: "/register",
   },
   {
      title: "account",
      linkTo: "/account",
   },
];

export const Navigation = (props: Props) => {
   // const { window } = props;
   // const [mobileOpen, setMobileOpen] = React.useState(false);

   // const handleDrawerToggle = () => {
   //    setMobileOpen(!mobileOpen);
   // };

   const isActiveNavLinkStyle = {
      marginRight: "1em",
      padding: "3px 7px",
      color: "#fff3cd",
      border: "1px solid #fff3cd",
   };

   const navLinkStyle = {
      color: "#a0a0a0",
      marginRight: "1em",
      padding: "3px 7px",
      border: "1px",
      borderColor: "transparent",
   };

   return (
      <Box position="sticky" sx={{ zIndex: 222000, padding: 4 }}>
         <AppBar>
            <Toolbar
               sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
               }}
            >
               <nav
                  style={{
                     margin: "0 auto",
                  }}
               >
                  <Box
                     component="ul"
                     sx={{
                        display: "flex",
                        alignItems: "center",
                     }}
                  >
                     <RecipeSearchForm />
                     {links.map((link) => (
                        <NavLink
                           key={link.title}
                           to={link.linkTo}
                           style={({ isActive }) =>
                              isActive
                                 ? { ...isActiveNavLinkStyle }
                                 : { ...navLinkStyle }
                           }
                        >
                           {link.title}
                        </NavLink>
                     ))}
                  </Box>
               </nav>{" "}
            </Toolbar>
         </AppBar>
      </Box>
   );
};
