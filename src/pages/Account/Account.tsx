import React from "react";
import { CSSObject, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link, Outlet } from "react-router-dom";
import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";





interface Props {
}

const Account = (props: Props) => {

   return (

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
         <Outlet />
      </Box>
   );
};

export default Account;
