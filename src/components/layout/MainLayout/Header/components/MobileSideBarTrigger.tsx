import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";

const MobileSideBarTrigger = () => {
  const { isMobile, toggleSidebar } = useSidebar();

  return isMobile ? (
    <Button className="ms-1" variant={"ghost"} onClick={toggleSidebar}>
      <Menu />
    </Button>
  ) : null;
};

export default MobileSideBarTrigger;
