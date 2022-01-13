import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
   position: "relative",
   borderRadius: theme.shape.borderRadius,
   backgroundColor: alpha(theme.palette.common.white, 0.15),
   "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
   },
   marginLeft: 0,
   width: "100%",
   [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
   },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
   padding: theme.spacing(0, 2),
   height: "100%",
   position: "absolute",
   pointerEvents: "none",
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: "inherit",
   "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
         width: "12ch",
         "&:focus": {
            width: "20ch",
         },
      },
   },
}));

interface Props {}

interface Links {
   title: string;
   linkTo: string;
}

const links: Links[] = [
   {
      title: "register",
      linkTo: "/register",
   },

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
      title: "account",
      linkTo: "/account",
   },
];

export const Navigation = (props: Props) => {
   const isActiveNavLinkStyle = {
      marginRight: "1em",
      padding: "3px 7px",
      color: "orange",
      border: "1px solid orange",
   };

   const navLinkStyle = {
      marginRight: "1em",
      padding: "3px 7px",
      border: "1px",
      borderColor: "transparent",
   };

   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position="static">
            <Toolbar>
               <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
               >
                  <MenuIcon />
               </IconButton>
               <nav>
                  <Box
                     component="ul"
                     sx={{
                        display: "flex",
                        justifyContent: "flex-end",
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
               </nav>{" "}
               <Search>
                  <SearchIconWrapper>
                     <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                     placeholder="Search…"
                     inputProps={{ "aria-label": "search" }}
                  />
               </Search>
            </Toolbar>
         </AppBar>
      </Box>
   );
};
