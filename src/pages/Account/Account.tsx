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

const drawerWidth = 240;

// interface AppBarProps extends MuiAppBarProps {
//    open?: boolean;
// }

// const AppBar = styled(MuiAppBar, {
//    shouldForwardProp: (prop) => prop !== "open",
// })<AppBarProps>(({ theme, open }) => ({
//    transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//    }),
//    ...(open && {
//       width: `calc(100% - ${drawerWidth}px)`,
//       marginLeft: `${drawerWidth}px`,
//       transition: theme.transitions.create(["margin", "width"], {
//          easing: theme.transitions.easing.easeOut,
//          duration: theme.transitions.duration.enteringScreen,
//       }),
//    }),
// }));

const listItems = ["Pannel", "My Recipes", "Add Recipe"].map((text, index) => (
   <ListItem button key={text}>
      <ListItemIcon>
         {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
      </ListItemIcon>
      {text !== "Pannel" ? (
         <Link to={`/account/${text.toLowerCase().replaceAll(" ", "-")}`}>
            <ListItemText primary={text} />
         </Link>
      ) : (
         <Link to={"/account"}>
            <ListItemText primary={text} />
         </Link>
      )}
   </ListItem>
));

const MenuListItems = ["Reset Password"].map((text, index) => (
   <Link to="/password-reset">
      <ListItem button key={text}>
         <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
         </ListItemIcon>
         <ListItemText primary={text} />
      </ListItem>
   </Link>
));

const drawer = (
   <div>
      <Toolbar />
      <Divider />
      <List>{listItems}</List>
      <Divider />
      <List>{MenuListItems}</List>
   </div>
);

const mainStyles = {
   flexGrow: 1,
   p: 3,
   width: { sm: `calc(100% - ${drawerWidth}px)` },
};

const drawerStyles = {
   display: { xs: "none", sm: "block" },
   "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: drawerWidth,
      color: "info.main",
   },
};
interface Props {
   window?: () => Window;
}

const Account = (props: Props) => {
   const { window } = props;
   const [mobileOpen, setMobileOpen] = React.useState(false);

   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };

   const container =
      window !== undefined ? () => window().document.body : undefined;

   return (
      <React.Fragment>
         <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Box
               component="nav"
               sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
               aria-label="mailbox folders"
            >
               <Drawer variant="permanent" sx={drawerStyles} open>
                  {drawer}
               </Drawer>
            </Box>
            <Box component="main" sx={mainStyles}>
               <Toolbar />
               <Outlet />
            </Box>
         </Box>
      </React.Fragment>
   );
};

export default Account;
