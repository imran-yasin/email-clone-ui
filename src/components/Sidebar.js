import React from "react";
import {
  Typography,
  Box,
  List,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Button,
  Stack,
  Paper,
} from "@mui/material";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { NavLink } from "react-router-dom";
import Routes from "../Layout/AppRoutes";
import { Labels } from "../Layout/AppRoutes";
import {
  sideNavLinkStyle,
  buttonHoverNone,
  sideNavIcon,
  //   sidebarListItem,
  sideBarDrawer,
} from "./muiDrawerStyleComponent";
import Dashboard from "./Dashboard";
import AddTodosModal from "./AddTodosModal";

const drawerWidth = 400;
console.log(Labels);

const Sidebar = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleOpenDialog = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Drawer
        sx={sideBarDrawer}
        variant="permanent"
        anchor="left"
        components={Paper}
        elevation={4}
      >
        <Stack padding={2}>
          <Button
            onClick={handleOpenDialog}
            variant="outlined"
            startIcon={<AddOutlinedIcon />}
            sx={{
              borderRadius: "50px",
              height: "50px",
            }}
          >
            Add New Task
          </Button>
        </Stack>
        <List disableripple="true">
          {Routes.map((text, index) => (
            <NavLink
              key={index}
              to={text.path}
              style={{
                textDecoration: "none",
              }}
            >
              <ListItem
                disablePadding
                // sx={sidebarListItem}
                sx={{
                  "&:hover": {
                    backgroundColor: "#f4f7fe",
                    borderRadius: "0px 40px 40px 0px ",
                  },
                }}
              >
                <ListItemButton
                  key={index}
                  to={text.path}
                  component={NavLink}
                  sx={buttonHoverNone}
                >
                  <ListItemIcon sx={sideNavIcon}>{text.icon}</ListItemIcon>
                  <Typography sx={sideNavLinkStyle}>{text.name}</Typography>
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
          <Typography
            variant="h6"
            component="h6"
            sx={{
              paddingLeft: "20px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Labels
          </Typography>
          {Labels.map((text, index) => (
            <NavLink
              key={index}
              to={text.path}
              style={{
                textDecoration: "none",
                color: "grey",
              }}
            >
              <ListItem
                disablePadding
                sx={{
                  "&:hover": {
                    backgroundColor: "#f4f7fe",
                    borderRadius: "0px 40px 40px 0px ",
                  },
                }}
              >
                <ListItemButton
                  disableripple="true"
                  key={index}
                  to={text.path}
                  component={NavLink}
                >
                  <ListItemIcon>{text.icon}</ListItemIcon>
                  <Typography sx={sideNavLinkStyle}>{text.name}</Typography>
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,

          width: { sm: `calc(100% - ${drawerWidth}px)` },
          margin: "50px",
        }}
      >
        <Dashboard />
      </Box>
      {showModal && (
        <AddTodosModal
          showModal={showModal}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};

export default Sidebar;
