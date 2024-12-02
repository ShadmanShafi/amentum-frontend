import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en";
import de from "./de";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  preload: ["en", "de"],

  resources: {
    en,
    de,
  },

  interpolation: {
    escapeValue: false,
  },

  react: {
    useSuspense: true,
  },
});

export { i18n };
