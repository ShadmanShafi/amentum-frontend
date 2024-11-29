import { FC } from "react";
import { Home, Settings, Folder, File, HelpCircle } from "lucide-react";

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
} from "@/components/ui/sidebar";

export const AppSidebar: FC = (): JSX.Element => {
  return (
    <Sidebar collapsible="icon" className="">
      <div className="text-end">
        <SidebarTrigger />
      </div>

      <SidebarContent>
        <SidebarMenu>
          {/* Home */}
          <SidebarMenuItem key="home">
            <SidebarMenuButton asChild>
              <a className="cursor-not-allowed">
                <Home />
                <span>Home</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Server Management */}
          <Collapsible defaultOpen>
            <SidebarMenuItem key="server-management">
              <CollapsibleTrigger key="server-management-trigger" asChild>
                <SidebarMenuButton asChild>
                  <div className="cursor-pointer">
                    <Folder />
                    <span>Serversteuerung</span>
                  </div>
                </SidebarMenuButton>
              </CollapsibleTrigger>

              <CollapsibleContent key="servers">
                <Collapsible defaultOpen>
                  <SidebarMenuSub>
                    {/* Servers */}
                    <SidebarMenuSubItem>
                      <CollapsibleTrigger key="servers-trigger" asChild>
                        <SidebarMenuButton asChild>
                          <div className="cursor-pointer">
                            <File />
                            <span>Servers</span>
                          </div>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>

                      <CollapsibleContent key="">
                        <SidebarMenuSub>
                          {/* VPS */}
                          <SidebarMenuSubItem>
                            <SidebarMenuButton asChild>
                              <a href="/server-management/servers/vps">
                                <span>VPS</span>
                              </a>
                            </SidebarMenuButton>
                          </SidebarMenuSubItem>

                          {/* VDS */}
                          <SidebarMenuSubItem>
                            <SidebarMenuButton asChild>
                              <a href="/server-management/servers/vds">
                                <span>VDS</span>
                              </a>
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
              <a className="cursor-not-allowed">
                <Settings />
                <span>Account</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Support */}
          <SidebarMenuItem key="support">
            <SidebarMenuButton asChild>
              <a className="cursor-not-allowed">
                <HelpCircle />
                <span>Support</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};
