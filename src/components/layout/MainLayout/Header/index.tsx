import { FC } from "react";
import { useTranslation } from "react-i18next";

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

import { AmentumLogo } from "@/assets/AmentumLogo";
import { FlagDe, FlagEn } from "@/assets/Flags";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronRight } from "lucide-react";

export const Header: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const { isMobile } = useSidebar();
  const { language, changeLanguage } = useLanguage();

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
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="group/collapsible">
              <Button variant="ghost" className="border-0">
                {language === "de" ? <FlagDe /> : <FlagEn />}
                {language === "de" ? "Deutsch" : "English"}
                <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-40">
              <DropdownMenuGroup>
                {language === "de" ? (
                  <DropdownMenuItem onClick={() => changeLanguage("en")}>
                    <FlagEn />
                    English
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem onClick={() => changeLanguage("de")}>
                    <FlagDe />
                    Deutsch
                  </DropdownMenuItem>
                )}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div>
          <Button disabled variant="ghost">
            Home
          </Button>
        </div>

        <div>
          <Button disabled variant="ghost">
            {t("hello")}
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
