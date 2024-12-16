import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useSidebar, SidebarFooter } from "@/components/ui/sidebar";

export const AppSideBarFooter = () => {
  const navigate = useNavigate();
  const { isMobile } = useSidebar();

  return isMobile ? (
    <SidebarFooter>
      <Button
        variant="ghost"
        className="hover:bg-customMenuItemHoverBg hover:text-white active:bg-customMenuItemHoverBg"
        onClick={() => navigate("/login")}
      >
        <LogOut />
      </Button>
    </SidebarFooter>
  ) : null;
};
