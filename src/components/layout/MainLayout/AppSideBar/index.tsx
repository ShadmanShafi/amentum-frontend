import { FC } from "react";

import { Sidebar } from "@/components/ui/sidebar";
import {
  AppSideBarContent,
  AppSideBarFooter,
} from "@/components/layout/MainLayout/AppSideBar/components";

export const AppSidebar: FC = (): JSX.Element => {
  return (
    <Sidebar
      collapsible="icon"
      className="h-[calc(100vh-60px)] md:h-[calc(100vh-102px)] overflow-x-hidden overflow-y-auto mt-[60px] md:mt-[102px]"
    >
      {/* <AppSideBarHeader /> */}
      <AppSideBarContent />
      <AppSideBarFooter />
    </Sidebar>
  );
};
