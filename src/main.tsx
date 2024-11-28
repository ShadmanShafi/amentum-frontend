import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "@/store";

import ErrorBoundary from "@/components/shared/ErrorBoundary";
import Page from "@/page";

import "@/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <Page />
      </Provider>
    </ErrorBoundary>
  </StrictMode>
);
