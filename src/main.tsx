import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";

import { store } from "@/store";

import ErrorBoundary from "@/components/shared/ErrorBoundary";
import Page from "@/page";

import { i18n } from "./translations/i18n";

import "@/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <Page />
        </Provider>
      </I18nextProvider>
    </ErrorBoundary>
  </StrictMode>
);
