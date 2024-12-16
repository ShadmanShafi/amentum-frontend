import { FC, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronRight, Menu } from "lucide-react";
import { useTranslation } from "react-i18next";

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
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
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
  const { isMobile, toggleSidebar } = useSidebar();

  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleMenuItemClick = (item: string) => {
    setActiveItem(item);
    if (isMobile) toggleSidebar();
  };

  return (
    <SidebarContent className="gap-0 mt-6 overflow-x-hidden">
      <SidebarMenu>
        <SidebarGroup>
          <SidebarMenuItem key="home">
            <SidebarMenuButton
              disabled
              asChild
              isActive={activeItem === "home"}
              onClick={() => handleMenuItemClick("home")}
            >
              <Button disabled variant="ghost" className="justify-start w-full">
                <IconHome />
                <span>{t("layout.sidebar.home")}</span>
              </Button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarGroup>
      </SidebarMenu>
      {/* Server Management */}
      <SidebarMenu>
        <Collapsible
          key="server-management"
          className="group/collapsible"
          title="Serversteuerung"
          defaultOpen={location.pathname.includes("vps")}
        >
          <SidebarGroup>
            <SidebarGroupLabel
              asChild
              className="text-sm group/label text-sidebar-foreground hover:text-sidebar-accent-foreground"
            >
              <CollapsibleTrigger className="hover:text-white hover:bg-customMenuItemHoverBg">
                <IconServerManagement />
                <span className="me-2"></span>
                {t("layout.sidebar.serverManagement")}
                <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>

            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenuSub className="border-0">
                  {/* Servers */}
                  <SidebarMenuItem key="servers">
                    <Collapsible
                      key="servers-collapsible"
                      className="group/collapsible me-2"
                      title="Servers"
                      defaultOpen={location.pathname.includes("vps")}
                    >
                      <SidebarGroup className="gap-2 ms-4">
                        <SidebarGroupLabel
                          asChild
                          className="text-sm group/label text-sidebar-foreground hover:text-sidebar-accent-foreground"
                        >
                          <CollapsibleTrigger className="hover:text-white hover:bg-customMenuItemHoverBg">
                            <IconServers />
                            <span className="me-2"></span>
                            {t("layout.sidebar.servers")}
                            <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                          </CollapsibleTrigger>
                        </SidebarGroupLabel>

                        <CollapsibleContent>
                          <SidebarGroupContent>
                            <SidebarMenuSub className="border-0">
                              {/* VPS */}
                              <SidebarMenuSubItem key="vps" className="ml-6">
                                <SidebarMenuButton
                                  asChild
                                  isActive={
                                    activeItem === "vps" ||
                                    location.pathname.includes("vps")
                                  }
                                  onClick={() => handleMenuItemClick("vps")}
                                >
                                  <NavLink to="/server-management/servers/vps">
                                    <span>{t("layout.sidebar.vps")}</span>
                                  </NavLink>
                                </SidebarMenuButton>
                              </SidebarMenuSubItem>

                              {/* VDS */}
                              <SidebarMenuSubItem key="vds" className="ml-6">
                                <SidebarMenuButton
                                  disabled
                                  asChild
                                  isActive={activeItem === "vds"}
                                  onClick={() => handleMenuItemClick("vds")}
                                >
                                  <Button
                                    variant="ghost"
                                    disabled
                                    className="justify-start w-full"
                                  >
                                    <span>{t("layout.sidebar.vds")}</span>
                                  </Button>
                                </SidebarMenuButton>
                              </SidebarMenuSubItem>
                            </SidebarMenuSub>
                          </SidebarGroupContent>
                        </CollapsibleContent>
                      </SidebarGroup>
                    </Collapsible>
                  </SidebarMenuItem>
                </SidebarMenuSub>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarMenu>
      {/* Account */}
      <SidebarMenu>
        <SidebarGroup>
          <SidebarMenuItem key="account">
            <SidebarMenuButton asChild>
              <Button variant="ghost" disabled className="justify-start w-full">
                <IconAccount />
                <span>{t("layout.sidebar.account")}</span>
              </Button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarGroup>
      </SidebarMenu>
      {/* Support */}
      <SidebarMenu>
        <SidebarGroup>
          <SidebarMenuItem key="support">
            <SidebarMenuButton asChild>
              <Button variant="ghost" disabled className="justify-start w-full">
                <IconSupport />
                <span>{t("layout.sidebar.support")}</span>
              </Button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarGroup>
      </SidebarMenu>
      {/* Menu Toggle */}
      <SidebarMenu className="">
        <SidebarGroup className="">
          <SidebarMenuItem key="toggle-sidebar" className="">
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
        </SidebarGroup>
      </SidebarMenu>
    </SidebarContent>
  );
};
