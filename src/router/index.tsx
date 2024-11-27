import { createBrowserRouter } from "react-router-dom";

import Layout from "@/components/layout";

export const getRouter = () => {
  const routes = [
    {
      id: "1",
      path: "/",
      element: <Layout />,
      children: [
        {
          id: "1.1",
          path: "/home",
          element: <div>Home</div>,
        },
        {
          id: "1.2",
          path: "/about",
          element: <div>About</div>,
        },
      ],
    },
    {
      id: "error",
      path: "*",
      element: <div className="text-red-400">not found</div>,
    },
  ];

  return createBrowserRouter(routes, { basename: "/" });
};
