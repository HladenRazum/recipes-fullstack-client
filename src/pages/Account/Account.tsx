import { Container, Typography } from "@mui/material";
import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {
   Link,
   Outlet,
   useMatch,
   useNavigate,
   useResolvedPath,
} from "react-router-dom";
import AddRecipeForm from "../../components/AddRecipeForm/AddRecipeForm";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
   open?: boolean;
}

const AppBar = styled(MuiAppBar, {
   shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
   transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
   }),
   ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(["margin", "width"], {
         easing: theme.transitions.easing.easeOut,
         duration: theme.transitions.duration.enteringScreen,
      }),
   }),
}));

interface Props {
   window?: () => Window;
}

const Account = (props: Props) => {
   const { window } = props;
   const [mobileOpen, setMobileOpen] = React.useState(false);

   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };

   const MenuListItems = ["Reset Password"].map((text, index) => (
      <ListItem button key={text}>
         <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
         </ListItemIcon>
         <ListItemText primary={text} />
      </ListItem>
   ));

   const drawer = (
      <div>
         <Toolbar />
         <Divider />
         <List>
            {["Pannel", "My Recipes", "Add Recipe"].map(
               (text, index) => (
                  <ListItem button key={text}>
                     <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                     </ListItemIcon>
                     {text !== "Pannel" ? (
                        <Link
                           to={`/account/${text
                              .toLowerCase()
                              .replaceAll(" ", "-")}`}
                        >
                           <ListItemText primary={text} />
                        </Link>
                     ) : (
                        <Link to={"/account"}>
                           <ListItemText primary={text} />
                        </Link>
                     )}
                  </ListItem>
               )
            )}
         </List>
         <Divider />
         <List>{MenuListItems}</List>
      </div>
   );

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
               <Drawer
                  variant="permanent"
                  sx={{
                     display: { xs: "none", sm: "block" },
                     "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                        color: "#fff",
                        // backgroundColor: "primary.main",
                     },
                  }}
                  open
               >
                  {drawer}
               </Drawer>
            </Box>
            <Box
               component="main"
               sx={{
                  flexGrow: 1,
                  p: 3,
                  width: { sm: `calc(100% - ${drawerWidth}px)` },
               }}
            >
               <Toolbar />
               <Outlet />
            </Box>
         </Box>
      </React.Fragment>
   );
};

export default Account;
