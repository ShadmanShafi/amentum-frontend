import { TFunction } from "i18next";

import { ROUTES } from "@/constants/routePaths";

import {
  IconAccount,
  IconHome,
  IconServerManagement,
  IconServers,
  IconSupport,
} from "@/assets/Icons";

export enum SIDEBAR_STATE {
  COLLAPSED = "collapsed",
  EXPANDED = "expanded",
}

export const menuItems = (t: TFunction) => ({
  navMain: [
    {
      title: t("layout.sidebar.home"),
      url: ROUTES.HOME,
      icon: IconHome,
    },
    {
      title: t("layout.sidebar.serverManagement"),
      url: ROUTES.ANCHOR_TAG,
      icon: IconServerManagement,
      items: [
        {
          title: t("layout.sidebar.servers"),
          url: ROUTES.ANCHOR_TAG,
          icon: IconServers,
          items: [
            {
              title: t("layout.sidebar.vps"),
              url: ROUTES.VPS,
            },
            {
              title: t("layout.sidebar.vds"),
              url: ROUTES.VDS,
            },
          ],
        },
      ],
    },
    {
      title: t("layout.sidebar.account"),
      url: ROUTES.ACCOUNT,
      icon: IconAccount,
    },
    {
      title: t("layout.sidebar.support"),
      url: ROUTES.SUPPORT,
      icon: IconSupport,
    },
  ],
});
