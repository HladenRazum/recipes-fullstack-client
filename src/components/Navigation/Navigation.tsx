import { Box } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

interface Props {}

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
      title: "register",
      linkTo: "/register",
   },
   {
      title: "login",
      linkTo: "/login",
   },
   {
      title: "account",
      linkTo: "/account",
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
      color: "#222",
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
