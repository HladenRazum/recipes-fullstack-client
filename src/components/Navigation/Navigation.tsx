import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

interface Props {
   window?: () => Window;
}

export const Navigation = (props: Props) => {
   const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);

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

   const loggedInLinks = (
      <React.Fragment>
         <NavLink
            to="/"
            style={({ isActive }) =>
               isActive ? { ...isActiveNavLinkStyle } : { ...navLinkStyle }
            }
         >
            Home
         </NavLink>
         <NavLink
            to="/recipes"
            style={({ isActive }) =>
               isActive ? { ...isActiveNavLinkStyle } : { ...navLinkStyle }
            }
         >
            Find recipes
         </NavLink>
         <NavLink
            to="/logout"
            style={({ isActive }) =>
               isActive ? { ...isActiveNavLinkStyle } : { ...navLinkStyle }
            }
         >
            Logout
         </NavLink>
         <NavLink
            to="/account"
            style={({ isActive }) =>
               isActive ? { ...isActiveNavLinkStyle } : { ...navLinkStyle }
            }
         >
            Account
         </NavLink>
      </React.Fragment>
   );

   const loggedOutLinks = (
      <React.Fragment>
         <NavLink
            to="/"
            style={({ isActive }) =>
               isActive ? { ...isActiveNavLinkStyle } : { ...navLinkStyle }
            }
         >
            Home
         </NavLink>
         <NavLink
            to="/recipes"
            style={({ isActive }) =>
               isActive ? { ...isActiveNavLinkStyle } : { ...navLinkStyle }
            }
         >
            Find recipes
         </NavLink>
         <NavLink
            to="/account/add-recipe"
            style={({ isActive }) =>
               isActive ? { ...isActiveNavLinkStyle } : { ...navLinkStyle }
            }
         >
            Add Recipe
         </NavLink>
         <NavLink
            to="/login"
            style={({ isActive }) =>
               isActive ? { ...isActiveNavLinkStyle } : { ...navLinkStyle }
            }
         >
            Login
         </NavLink>
      </React.Fragment>
   );
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
                     {isLoggedIn ? loggedInLinks : loggedOutLinks}
                  </Box>
               </nav>{" "}
            </Toolbar>
         </AppBar>
      </Box>
   );
};
