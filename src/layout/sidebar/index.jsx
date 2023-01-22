import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";

import expandIcon from "assets/icons/Expand.svg";
import { sidebarItems } from "./constants";
import { routeNames } from "routes/routeNames";
import { DrawerHeader, Drawer } from "config/drawer";
import userIcon from "assets/icons/User.svg";
import "./style.scss";

export default function MiniDrawer({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate(routeNames.login.route);
    window.location.reload(false);
  };

  return (
    <Box sx={{ display: "flex" }} className="sidebar">
      <Drawer variant="permanent" open={open} className="position-relative">
        <DrawerHeader>
          <IconButton onClick={handleDrawerOpen} className="pr-3 mt-20">
            <img src={expandIcon} alt="expand" />
          </IconButton>
        </DrawerHeader>
        <List className="mt-20">
          {sidebarItems.map((o) => (
            <ListItem
              key={o.id}
              disablePadding
              onClick={
                o.title === "Logout" ? handleLogout : () => navigate(o.route)
              }
            >
              <ListItemButton selected={o.route === location.pathname}>
                <ListItemIcon>
                  <img src={o.icon} alt="sidebar-icons" />
                </ListItemIcon>
                <ListItemText primary={o.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <div className="sidebar-user">
          <List>
            <ListItem>
              <ListItemIcon>
                <img src={userIcon} alt="users" />
              </ListItemIcon>
            </ListItem>
          </List>
        </div>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
    </Box>
  );
}
