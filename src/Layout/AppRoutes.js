import React from "react";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventIcon from "@mui/icons-material/Event";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";

// import Dashboard from "../components/Dashboard";
// import Starred from "../components/Starred";
// import Priority from "../components/Priority";
// import Scheduled from "../components/Scheduled";
// import Today from "../components/Today";
// import Completed from "../components/Completed";
// import Deleted from "../components/Deleted";
// import HtmlLable from "../components/HtmlLable";
// import CssLable from "../components/CssLable";
// import JQueryLable from "../components/JQueryLable";
// import NodeJsLable from "../components/NodeJsLable";

const Routes = [
  {
    name: "All",
    icon: <PeopleAltIcon />,
    path: "/dashboard",
    // component: Dashboard,
  },
  {
    name: "Starred",
    icon: <StarBorderIcon />,
    path: "/starred",
    // component: Starred,
  },
  {
    name: "Priority",
    icon: <LabelImportantIcon />,
    path: "/priority",
    // component: Priority,
  },
  {
    name: "Scheduled",
    icon: <AccessTimeIcon />,
    path: "/scheduled",
    // component: Scheduled,
  },
  {
    name: "Today",
    icon: <EventIcon />,
    path: "/today",
    // component: Today,
  },
  {
    name: "Completed",
    icon: <CheckCircleOutlineIcon />,
    path: "/completed",
    // component: Completed,
  },
  {
    name: "Deleted",
    icon: <DeleteOutlineIcon />,
    path: "/deleted",
    // component: Deleted,
  },
];

export const Labels = [
  {
    name: "Html",
    icon: (
      <LabelOutlinedIcon
        sx={{
          color: "red",
        }}
      />
    ),
    path: "/html",
    // component: HtmlLable,
  },
  {
    name: "CSS",
    icon: (
      <LabelOutlinedIcon
        sx={{
          color: "blue",
        }}
      />
    ),
    path: "/css",
    // component: CssLable,
  },
  {
    name: "JQuery",
    icon: (
      <LabelOutlinedIcon
        sx={{
          color: "green",
        }}
      />
    ),
    path: "/jqurey",
    // component: JQueryLable,
  },
  {
    name: "Node.js",
    icon: (
      <LabelOutlinedIcon
        sx={{
          color: "black",
        }}
      />
    ),
    path: "/nodejs",
    // component: NodeJsLable,
  },
];
export default Routes;
