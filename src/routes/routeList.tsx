import { RouteObject } from "react-router-dom";

import { MainLayout } from "../components/layout";
import { mainMenuList } from "./mainMenuList";

import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import ResetPassword from "@/pages/ResetPassword";

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
    element: <SignUp />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
];
