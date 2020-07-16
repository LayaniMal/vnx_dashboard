//routes,paths for every click 
import Dashboard from "views/Dashboard.jsx";
import TableList from "views/TableList.jsx";
import Icons from "views/Icons.jsx";
import Notifications from "views/Notifications.jsx";
import Upgrade from "views/Upgrade.jsx";

const dashboardRoutes = [  
  {
    path: "/icons",
    name: "Main View",
    icon: "pe-7s-graph",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Over View",
    icon: "pe-7s-menu",
    component: Dashboard,
    layout: "/admin"
  },

  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "More details",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/admin"
  },
  
];

export default dashboardRoutes;
