export const sideNavLinkStyle = {
  "&.MuiTypography-root": {
    color: "grey",
    // "&:hover": {
    //   color: "blue",
    // },
  },
};

export const buttonHoverNone = {
  "&.MuiButtonBase-root": {
    backgroundColor: "none",
  },
};

export const sideNavIcon = {
  "&.MuiListItemIcon-root": {
    // "&:hover": {
    //   color: "blue",
    // },
  },
};

export const sidebarListItem = {
  "&.MuiListItem-root": {
    // color: "grey",
    // backgroundColor: "red",
  },
  "&:hover": {
    // color: "blue",
  },
};

const drawerWidth = 250;
// const drawerHeight = 40;
export const sideBarDrawer = {
  "&.MuiDrawer-docked": {
    // height: drawerHeight,
    width: drawerWidth,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      boxSizing: "border-box",
      paddingTop: "20px",
      borderRadius: "15px",
      paddingRight: "20px",
      margin: "50px",
      height: "81.8%",
    },
  },
};
