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
import { Button, Container } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
   position: "relative",
   width: 500,
   borderRadius: theme.shape.borderRadius,
   backgroundColor: alpha(theme.palette.common.white, 0.15),
   "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
   },
   marginLeft: 0,
   marginRight: [theme.spacing(0)],
   [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
   },
   borderBottomRightRadius: 0,
   borderTopRightRadius: 0,
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
         width: "18ch",
         "&:focus": {
            width: "24ch",
         },
      },
   },
}));

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
   const { window } = props;
   const [mobileOpen, setMobileOpen] = React.useState(false);

   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };

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
                     <Search>
                        <SearchIconWrapper>
                           <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                           placeholder="Search Recipes"
                           inputProps={{ "aria-label": "search" }}
                        />
                     </Search>
                     <Button
                        sx={{
                           marginRight: 20,
                           borderTopLeftRadius: 0,
                           borderBottomLeftRadius: 0,
                        }}
                        variant="contained"
                        color="info"
                        onClick={() => {}}
                     >
                        GO
                     </Button>
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
