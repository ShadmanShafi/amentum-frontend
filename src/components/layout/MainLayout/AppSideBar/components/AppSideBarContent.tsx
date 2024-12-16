import { FC, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronRight, Menu } from "lucide-react";
import { useTranslation } from "react-i18next";

import { ROUTES } from "@/constants/routePaths";
import { SIDEBAR_STATE } from "@/constants/menuItems";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  useSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";

import {
  IconAccount,
  IconHome,
  IconServerManagement,
  IconServers,
  IconSupport,
} from "@/assets/Icons";

export const AppSideBarContent: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const location = useLocation();
  const { state, isMobile, toggleSidebar } = useSidebar();

  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleMenuItemClick = (item: string) => {
    setActiveItem(item);
    if (isMobile) toggleSidebar();
  };

  return (
    <SidebarContent className="gap-0 mt-6 overflow-x-hidden">
      <SidebarGroup>
        <SidebarMenu>
          {/* Home */}
          <SidebarMenuItem key={ROUTES.HOME}>
            <SidebarMenuButton
              disabled
              asChild
              isActive={activeItem === ROUTES.HOME}
              onClick={() => handleMenuItemClick(ROUTES.HOME)}
            >
              <Button disabled variant="ghost" className="justify-start w-full">
                <IconHome />
                <span className="font-semibold">
                  {t("layout.sidebar.home")}
                </span>
              </Button>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Server Management */}
          <Collapsible
            key={ROUTES.SERVER_MANAGEMENT}
            className="group/collapsible "
            defaultOpen={location.pathname.includes(ROUTES.VPS)}
            onClick={
              state === SIDEBAR_STATE.COLLAPSED ? toggleSidebar : undefined
            }
          >
            <SidebarGroup className="p-0 ">
              <CollapsibleTrigger>
                <SidebarMenuButton
                  asChild
                  className={`transition-transform ${location.pathname.includes("vps") && state === SIDEBAR_STATE.EXPANDED ? "border-l-[6px] border-customActiveBorder " : ""} hover:text-white hover:bg-customMenuItemHoverBg active:bg-customMenuItemHoverBg active:text-white active:scale-95`}
                  isActive={location.pathname.includes("vps")}
                >
                  <div className="flex">
                    <IconServerManagement />
                    <span className="font-semibold">
                      {t("layout.sidebar.serverManagement")}
                    </span>

                    <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                  </div>
                </SidebarMenuButton>
              </CollapsibleTrigger>

              {/* Servers */}
              <CollapsibleContent>
                <SidebarMenuSub className="pt-2 border-0 ps-6">
                  <Collapsible
                    key="servers-collapsible"
                    className="group/collapsible"
                    title="Servers"
                    defaultOpen={location.pathname.includes("vps")}
                  >
                    <CollapsibleTrigger className="w-full">
                      <SidebarMenuButton
                        asChild
                        className={`${location.pathname.includes("vps") ? "bg-customMenuItemHoverBg" : ""} transition-transform hover:text-white hover:bg-customMenuItemHoverBg active:bg-customMenuItemHoverBg active:text-white active:scale-95`}
                      >
                        <div className="flex justify-between">
                          <IconServers />
                          <span className="font-semibold me-2">
                            {t("layout.sidebar.servers")}
                          </span>

                          <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                        </div>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>

                    {/* VPS */}
                    <CollapsibleContent>
                      <SidebarMenuSub className="pt-2 border-0 ps-2">
                        <SidebarMenuSubItem key="vps" className="ml-6">
                          <SidebarMenuSubButton
                            asChild
                            className="transition-transform active:scale-95 hover:text-white hover:bg-customMenuItemHoverBg active:bg-customMenuItemHoverBg active:text-white"
                            onClick={() => handleMenuItemClick("vps")}
                          >
                            <NavLink to="/server-management/servers/vps">
                              <span className="font-semibold">
                                {t("layout.sidebar.vps")}
                              </span>
                            </NavLink>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>

                        {/* VDS */}
                        <SidebarMenuSubItem key="vds" className="ml-6">
                          <SidebarMenuSubButton
                            asChild
                            isActive={activeItem === "vds"}
                            onClick={() => handleMenuItemClick("vds")}
                          >
                            <Button
                              variant="ghost"
                              disabled
                              className="justify-start w-full"
                            >
                              <span className="font-semibold">
                                {t("layout.sidebar.vds")}
                              </span>
                            </Button>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </Collapsible>
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>

          {/* Account */}
          <SidebarMenuItem key={ROUTES.ACCOUNT}>
            <SidebarMenuButton asChild disabled>
              <Button disabled variant="ghost" className="justify-start w-full">
                <IconAccount />
                <span className="font-semibold">
                  {t("layout.sidebar.account")}
                </span>
              </Button>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Support */}
          <SidebarMenuItem key={ROUTES.SUPPORT}>
            <SidebarMenuButton disabled asChild>
              <Button disabled variant="ghost" className="justify-start w-full">
                <IconSupport />
                <span className="font-semibold">
                  {t("layout.sidebar.support")}
                </span>
              </Button>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Menu Toggle */}
          <SidebarMenuItem key="toggle-sidebar">
            <SidebarMenuButton
              asChild
              className="hover:bg-customMenuItemHoverBg"
            >
              <Button
                variant="ghost"
                className="hover:text-white active:bg-customMenuItemHoverBg"
                onClick={() => toggleSidebar()}
              >
                <Menu />
              </Button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
  );
};
