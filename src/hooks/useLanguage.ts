import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getLocalStorage, setLocalStorage } from "@/utils/storageUtils";

export const LANGUAGE = {
  GERMAN: "de",
  ENGLISH: "en",
};

interface UseLanguage {
  language: string | null;
  changeLanguage: (language: string) => void;
}

export const useLanguage = (): UseLanguage => {
  const { i18n } = useTranslation();
  const language = getLocalStorage("language") || i18n.language;

  const changeLanguage = (language: string) => {
    if (language === LANGUAGE.GERMAN) {
      setLocalStorage("language", LANGUAGE.GERMAN);
      i18n.changeLanguage(LANGUAGE.GERMAN);
    } else {
      setLocalStorage("language", LANGUAGE.ENGLISH);
      i18n.changeLanguage(LANGUAGE.ENGLISH);
    }
  };

  useEffect(() => {
    i18n.changeLanguage(
      language === LANGUAGE.ENGLISH ? LANGUAGE.ENGLISH : LANGUAGE.GERMAN
    );
  }, [i18n, language]);

  return {
    language,
    changeLanguage,
  };
};
