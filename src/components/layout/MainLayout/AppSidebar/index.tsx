import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Folder, Home, Server } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

export const AppSidebar: FC = (): JSX.Element => {
  const { isMobile, toggleSidebar } = useSidebar();

  return (
    <Sidebar collapsible="icon" className="mt-24">
      <div className="text-end">
        <SidebarTrigger />
      </div>

      <SidebarContent className="mx-2 ">
        <SidebarMenu>
          {/* Home */}
          <SidebarMenuItem key="home">
            <SidebarMenuButton asChild disabled>
              <Button variant="ghost" disabled className="justify-start w-full">
                <Home />
                <span>Home</span>
              </Button>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Server Management */}
          <Collapsible className="group/collapsible">
            <SidebarMenuItem key="server-management">
              <CollapsibleTrigger key="server-management-trigger" asChild>
                <SidebarMenuButton asChild>
                  <Button variant="ghost" className="justify-start w-full">
                    <Folder />
                    <span>Serversteuerung</span>
                  </Button>
                </SidebarMenuButton>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <Collapsible className="group/collapsible">
                  <SidebarMenuSub>
                    {/* Servers */}
                    <SidebarMenuSubItem>
                      <CollapsibleTrigger key="servers-trigger" asChild>
                        <SidebarMenuButton asChild>
                          <Button
                            variant="ghost"
                            className="justify-start w-full"
                          >
                            <Server />
                            <span>Servers</span>
                          </Button>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>

                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {/* VPS */}
                          <SidebarMenuSubItem>
                            <SidebarMenuButton
                              asChild
                              onClick={() => {
                                if (isMobile) toggleSidebar();
                              }}
                            >
                              <NavLink
                                to="/server-management/servers/vps"
                                className="pl-6"
                              >
                                <span>VPS</span>
                              </NavLink>
                            </SidebarMenuButton>
                          </SidebarMenuSubItem>

                          {/* VDS */}
                          <SidebarMenuSubItem>
                            <SidebarMenuButton
                              asChild
                              onClick={() => {
                                if (isMobile) toggleSidebar();
                              }}
                            >
                              <NavLink
                                to="/server-management/servers/vds"
                                className="pl-6"
                              >
                                <span>VDS</span>
                              </NavLink>
                            </SidebarMenuButton>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </Collapsible>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>

          {/* Account */}
          <SidebarMenuItem key="account">
            <SidebarMenuButton asChild>
              <Button variant="ghost" disabled className="justify-start w-full">
                <Home />
                <span>Account</span>
              </Button>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Support */}
          <SidebarMenuItem key="support">
            <SidebarMenuButton asChild>
              <Button variant="ghost" disabled className="justify-start w-full">
                <Home />
                <span>Support</span>
              </Button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};
