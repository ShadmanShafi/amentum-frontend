import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LogOut } from "lucide-react";

import { AppDispatch } from "@/store";

import { Button } from "@/components/ui/button";
import { useSidebar, SidebarFooter } from "@/components/ui/sidebar";

import { clearAppState } from "@/utils/clearAppState";

export const AppSideBarFooter = () => {
  const navigate = useNavigate();
  const { isMobile } = useSidebar();

  const dispatch: AppDispatch = useDispatch();

  const handleLogout = () => {
    clearAppState(dispatch);

    navigate("/login");
  };

  return isMobile ? (
    <SidebarFooter>
      <Button
        variant="ghost"
        className="hover:bg-customMenuItemHoverBg hover:text-white active:bg-customMenuItemHoverBg"
        onClick={handleLogout}
      >
        <LogOut />
      </Button>
    </SidebarFooter>
  ) : null;
};
