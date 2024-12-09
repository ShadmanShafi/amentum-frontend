import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronRight, Menu } from "lucide-react";

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

export const Header: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isMobile, toggleSidebar } = useSidebar();
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="flex items-center justify-between h-full px-4 bg-white md:justify-evenly md:px-8">
      {isMobile ? (
        <Button className="ms-1" variant={"ghost"} onClick={toggleSidebar}>
          <Menu />
        </Button>
      ) : null}

      <div className="flex items-center">
        <AmentumLogo scale={isMobile ? 0.6 : 1} />
      </div>

      <div className="flex-row hidden lg:gap-8 md:flex">
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

        <Button disabled variant="ghost">
          {t("layout.header.home")}
        </Button>

        <Button disabled variant="ghost">
          {t("layout.header.services")}
        </Button>

        <Button
          className="px-8 font-bold rounded-3xl"
          onClick={() => navigate("/login")}
        >
          {t("layout.header.logout")}
        </Button>
      </div>

      {isMobile ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="group/collapsible">
            <Button variant="ghost" className="border-0">
              {language === "de" ? <FlagDe /> : <FlagEn />}
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
      ) : null}
    </div>
  );
};
