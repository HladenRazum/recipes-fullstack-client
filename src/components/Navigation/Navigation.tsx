import { Box } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

interface Props { }

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
      marginRight: "1em",
      padding: "3px 7px",
      color: "red",
      border: "1px solid red",
   };

   const navLinkStyle = {
      marginRight: "1em",
      padding: "3px 7px",
      color: "#222",
      border: "1px",
      borderColor: "transparent",
   };

   return (
      <nav>
         <Box
            component="ul"
            sx={{
               display: "flex",
               padding: 3,
               backgroundColor: "#fff",
               justifyContent: "center",
               marginTop: 0,
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
