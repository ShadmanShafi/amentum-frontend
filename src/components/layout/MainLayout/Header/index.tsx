import { FC } from "react";

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

import { AmentumLogo } from "@/assets/AmentumLogo";
import { Button } from "@/components/ui/button";

export const Header: FC = (): JSX.Element => {
  const { isMobile } = useSidebar();

  return (
    <div className="flex items-center h-full bg-white justify-evenly">
      {isMobile ? (
        <div className="items-start w-full">
          <SidebarTrigger />
        </div>
      ) : null}

      <div>
        <AmentumLogo />
      </div>

      <div className="flex flex-row gap-8">
        <div>
          <Button variant="ghost">Button</Button>
        </div>

        <div>
          <Button disabled variant="ghost">
            Home
          </Button>
        </div>

        <div>
          <Button disabled variant="ghost">
            Services
          </Button>
        </div>

        <div>
          <Button
            size="sm"
            variant="ghost"
            className="px-4 font-bold text-white rounded-3xl bg-primary"
          >
            Log out
          </Button>
        </div>
      </div>
    </div>
  );
};
