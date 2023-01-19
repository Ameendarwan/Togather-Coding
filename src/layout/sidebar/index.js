import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";

import expandIcon from "assets/icons/Expand.svg";
import { sidebarItems } from "config/sidebarItems";
import { routeNames } from "routes/constants";
import { DrawerHeader, Drawer } from "config/drawer";
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
    <Box sx={{ display: "flex" }}>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerOpen} className="pr-3">
            <img src={expandIcon} alt="expand" />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
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
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}
