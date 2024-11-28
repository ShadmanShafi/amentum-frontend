import { Outlet, RouteObject } from "react-router-dom";

export const mainMenuList: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        path: "/",
        index: true,
        element: <div>Home</div>,
      },
      {
        path: "server-management",
        element: (
          <div>
            Server Management
            <Outlet />
          </div>
        ),
        children: [
          {
            path: "servers",
            element: (
              <div>
                Servers
                <Outlet />
              </div>
            ),
            children: [
              {
                path: "vps",
                element: (
                  <div>
                    VPS
                    <Outlet />
                  </div>
                ),
                children: [
                  {
                    path: ":id",
                    element: <div>Server Details</div>,
                  },
                ],
              },
              {
                path: "vds",
                element: (
                  <div>
                    VDS
                    <Outlet />
                  </div>
                ),
                children: [
                  {
                    path: ":id",
                    element: <div>VDS Details</div>,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "account",
        element: (
          <div>
            Account
            <Outlet />
          </div>
        ),
        children: [
          {
            path: "profile",
            element: <div>Profile</div>,
          },
          {
            path: "settings",
            element: <div>Settings</div>,
          },
        ],
      },
      {
        path: "support",
        element: (
          <div>
            Support
            <Outlet />
          </div>
        ),
        children: [
          {
            path: "faq",
            element: <div>FAQ</div>,
          },
          {
            path: "contact",
            element: <div>Contact Support</div>,
          },
        ],
      },
    ],
  },
];
