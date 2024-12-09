import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useLanguage } from "@/hooks/useLanguage";

import { FlagDe, FlagEn } from "@/assets/Flags";

const MobileTranslationTrigger = () => {
  const { isMobile } = useSidebar();
  const { language, changeLanguage } = useLanguage();

  return isMobile ? (
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
  ) : null;
};

export default MobileTranslationTrigger;
