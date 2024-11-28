import { RouteObject } from "react-router-dom";

import { MainLayout } from "../components/layout";
import { mainMenuList } from "./mainMenuList";

export const routeList: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: mainMenuList,
  },
  {
    path: "/login",
    element: <div>login</div>,
  },
  {
    path: "/registration",
    element: <div>registration</div>,
  },
  {
    path: "/reset-password",
    element: <div>reset-password</div>,
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
];
