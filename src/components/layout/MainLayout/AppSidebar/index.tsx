import { FC } from "react";
import { Calendar, Home, Inbox, Search, Settings, Server } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Serversteuerung",
    // url: "#",
    icon: Server,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export const AppSidebar: FC = (): JSX.Element => {
  return (
    <Sidebar collapsible="icon">
      <div className="text-end">
        <SidebarTrigger />
      </div>

      <SidebarContent>
        <SidebarMenu>
          {/* <Collapsible defaultOpen className="group/collapsible">
            <SidebarMenuItem key={"servers"}>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton asChild>
                  <a href={"servers"}>
                    <Server />
                    <span>{"Servers"}</span>
                  </a>
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  <SidebarMenuSubItem />
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible> */}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};
