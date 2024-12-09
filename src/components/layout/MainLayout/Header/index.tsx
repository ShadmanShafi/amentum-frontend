import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { AmentumLogo } from "@/assets/AmentumLogo";

import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

import TranslationTrigger from "./components/TranslationTrigger";
import MobileSideBarTrigger from "./components/MobileSideBarTrigger";
import MobileTranslationTrigger from "./components/MobileTranslationTrigger";

export const Header: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isMobile } = useSidebar();

  return (
    <div className="flex items-center justify-between h-full px-4 bg-white md:justify-evenly md:px-8">
      <MobileSideBarTrigger />

      <AmentumLogo scale={isMobile ? 0.6 : 1} />

      <div className="flex-row hidden lg:gap-8 md:flex">
        <TranslationTrigger />

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

      <MobileTranslationTrigger />
    </div>
  );
};
