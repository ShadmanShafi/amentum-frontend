import { FC } from "react";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

export const Header: FC = (): JSX.Element => {
  const { isMobile } = useSidebar();

  return (
    <div className="flex items-center justify-center">
      {isMobile ? (
        <div className="items-start w-full">
          <SidebarTrigger />
        </div>
      ) : null}
      Header
    </div>
  );
};
