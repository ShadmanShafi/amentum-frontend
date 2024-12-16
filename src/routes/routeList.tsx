import { RouteObject } from "react-router-dom";

import { ROUTES } from "@/constants/routePaths";

import { MainLayout } from "../components/layout";
import { mainMenuList } from "./mainMenuList";

import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import ResetPassword from "@/pages/ResetPassword";
import NotFound404 from "@/components/shared/404";

export const routeList: RouteObject[] = [
  {
    path: ROUTES.HOME,
    element: <MainLayout />,
    children: mainMenuList,
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTES.REGISTRATION,
    element: <SignUp />,
  },
  {
    path: ROUTES.RESET_PASSWORD,
    element: <ResetPassword />,
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound404 />,
  },
];
