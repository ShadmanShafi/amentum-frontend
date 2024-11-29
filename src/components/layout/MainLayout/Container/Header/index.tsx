import { FC } from "react";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

export const Header: FC = (): JSX.Element => {
  const { isMobile } = useSidebar();

  return (
    <div className="w-full">
      {isMobile ? <SidebarTrigger /> : null}
      Header
    </div>
  );
};
