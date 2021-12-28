import { Box } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

interface Props {}

const links = [
   {
      title: "home",
      linkTo: "/",
   },
   {
      title: "account",
      linkTo: "/account",
   },
   {
      title: "register",
      linkTo: "/register",
   },
];

export const Navigation = (props: Props) => {
   const isActiveNavLinkStyle = {
      margin: "0 1em",
      padding: "3px 7px",
      color: "red",
      border: "1px solid red",
   };

   const navLinkStyle = {
      margin: "0 1em",
      padding: "3px 7px",
   };

   return (
      <nav>
         <Box
            component="ul"
            sx={{
               justifyContent: "center",
               display: "flex",
               padding: 2,
               backgroundColor: "secondary.light",
            }}
         >
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
      </nav>
   );
};
