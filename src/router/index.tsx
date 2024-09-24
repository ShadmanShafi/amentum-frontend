import React from 'react';
import { createBrowserRouter, type RouteObject } from 'react-router-dom';

import Layout from '@/components/Layout';
// import Dashboard from '@/pages/dashboard';

// import { USER_TYPE } from '@/constant/userType';
import { ROUTER_PATHS } from '@/constants/routerPaths';

const { REGISTRATION, HOME } = ROUTER_PATHS;
// const { REVIEWER, ADMIN } = USER_TYPE;

// pages
// const Registration = React.lazy(async () => await import('@/pages/registration'));
// const NewsFeed = React.lazy(async () => await import('@/pages/newsFeed'));
const Error404 = React.lazy(async () => await import('@/pages/error/404'));
const Home = React.lazy(async () => await import('@/pages/home'));
// const RenderOnAuthenticated = React.lazy(async () => await import('./RenderOnAuthenticated'));
// const RenderOnRole = React.lazy(async () => await import('./RenderOnRole'));
// const Feedbacks = React.lazy(async () => await import('@/pages/feedbacks'));
// const CreateFeedback = React.lazy(async () => await import('@/pages/createFeedback'));

// Route configuration
export const getRouter = () => {
  const routes: RouteObject[] = [
    {
      id: `${REGISTRATION.LABEL}`,
      path: REGISTRATION.PATH,
      // element: <Registration />,
      element: <div>Registration</div>,
    },
    {
      id: HOME.LABEL,
      path: HOME.PATH,
      element: <Layout />,
      children: [
        {
          id: `${HOME.LABEL}.1`,
          index: true,
          // element: <Dashboard />,
          element: <Home />,
        },
        // {
        //   id: `${APPROVE.LABEL}.2`,
        //   path: APPROVE.PATH,
        //   element: (
        //     <RenderOnRole roles={[REVIEWER, ADMIN]} showNotAllowed={true}>
        //       <ArbiterNewsFeed />
        //     </RenderOnRole>
        //   ),
        // },
        // {
        //   id: `${FEEDBACKS.LABEL}.3`,
        //   path: FEEDBACKS.PATH,
        //   element: (
        //     <RenderOnRole roles={[REVIEWER]} showNotAllowed={true}>
        //       <Feedbacks />
        //     </RenderOnRole>
        //   ),
        // },
        // {
        //   id: `${CREATE_FEEDBACK.LABEL}.4`,
        //   path: CREATE_FEEDBACK.PATH,
        //   element: (
        //     <RenderOnAuthenticated>
        //       <CreateFeedback />
        //     </RenderOnAuthenticated>
        //   ),
        // },

        // {
        //   id: CREATE_.LABEL,
        //   path: `${CREATE_.PATH}`,
        //   element: (
        //     <RenderOnAuthenticated>
        //       <Create />
        //     </RenderOnAuthenticated>
        //   ),
        // },
      ],
    },
    {
      id: 'ERROR',
      path: '*',
      element: <Error404 />,
    },
  ];

  return createBrowserRouter(routes, { basename: '/' });
};
