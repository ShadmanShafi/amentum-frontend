import { RouteObject } from "react-router-dom";

import { MainLayout } from "../components/layout";
import { mainMenuList } from "./mainMenuList";

import Login from "@/pages/Login";

export const routeList: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: mainMenuList,
  },
  {
    path: "/login",
    element: <Login />,
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
