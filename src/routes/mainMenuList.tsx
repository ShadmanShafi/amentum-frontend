import { RouteObject } from "react-router-dom";

import Home from "@/pages/Home";
import Vps from "@/pages/Vps";
import VpsDetails from "@/pages/Vps/Details";

export const mainMenuList: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "server-management/servers/vps",
        element: <Vps />,
      },
      {
        path: "server-management/servers/vps/:id",
        element: <VpsDetails />,
      },
      {
        path: "server-management/servers/vds/:id",
        element: <div>VDS</div>,
      },
      {
        path: "account",
        element: <div>Account</div>,
      },
      {
        path: "support",
        element: <div>Support</div>,
      },
    ],
  },
];
