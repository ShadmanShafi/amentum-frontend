import { FC, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronRight, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  useSidebar,
  Sidebar,
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

export const AppSidebar: FC = (): JSX.Element => {
  const location = useLocation();
  const { isMobile, toggleSidebar } = useSidebar();

  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleMenuItemClick = (item: string) => {
    setActiveItem(item);
    if (isMobile) toggleSidebar();
  };

  return (
    <Sidebar
      collapsible="icon"
      className="h-[calc(100vh-60px)] md:h-[calc(100vh-102px)] overflow-x-hidden overflow-y-auto mt-[60px] md:mt-[102px]"
    >
      <SidebarContent className="gap-0 mt-6 overflow-x-hidden">
        {/* Home */}
        <SidebarMenu>
          <SidebarGroup>
            <SidebarMenuItem key="home">
              <SidebarMenuButton
                disabled
                asChild
                isActive={activeItem === "home"}
                onClick={() => handleMenuItemClick("home")}
              >
                <Button
                  disabled
                  variant="ghost"
                  className="justify-start w-full"
                >
                  <IconHome />
                  <span>Home</span>
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
                className="text-sm group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <CollapsibleTrigger className="hover:text-white hover:bg-customSubMenuHover">
                  <IconServerManagement />
                  <span className="me-2"></span>
                  {"Serversteuerung"}
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
                            className="text-sm group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                          >
                            <CollapsibleTrigger className="hover:text-white hover:bg-customSubMenuHover">
                              <IconServers />
                              <span className="me-2"></span>
                              {"Servers"}
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
                                      <span>VPS</span>
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
                                      <span>VDS</span>
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
                <Button
                  variant="ghost"
                  disabled
                  className="justify-start w-full"
                >
                  <IconAccount />
                  <span>Account</span>
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
                <Button
                  variant="ghost"
                  disabled
                  className="justify-start w-full"
                >
                  <IconSupport />
                  <span>Support</span>
                </Button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarGroup>
        </SidebarMenu>

        <SidebarMenu className="">
          <SidebarGroup>
            <SidebarMenuItem key="toggle-sidebar">
              <SidebarMenuButton asChild>
                <Button variant="ghost" onClick={() => toggleSidebar()}>
                  <Menu />
                </Button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarGroup>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};
