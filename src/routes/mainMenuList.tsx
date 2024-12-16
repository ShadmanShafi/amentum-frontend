import { RouteObject } from "react-router-dom";

import { ROUTES } from "@/constants/routePaths";

// import Home from "@/pages/Home";
import Vps from "@/pages/Vps";
import VpsDetails from "@/pages/Vps/Details";

export const mainMenuList: RouteObject[] = [
  {
    path: ROUTES.HOME,
    children: [
      {
        path: ROUTES.HOME,
        index: true,
        element: <Vps />,
      },
      {
        path: ROUTES.VPS,
        element: <Vps />,
      },
      {
        path: ROUTES.VPS_DETAILS,
        element: <VpsDetails />,
      },
      {
        path: ROUTES.VDS,
        element: <div>VDS</div>,
      },
      {
        path: ROUTES.VDS_DETAILS,
        element: <div>VDS Details</div>,
      },
      {
        path: ROUTES.ACCOUNT,
        element: <div>Account</div>,
      },
      {
        path: ROUTES.SUPPORT,
        element: <div>Support</div>,
      },
    ],
  },
];
