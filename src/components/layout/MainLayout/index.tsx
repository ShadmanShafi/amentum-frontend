import { FC } from "react";
import { Navigate } from "react-router-dom";

import { AppSidebar } from "./AppSidebar";
import { Container } from "./Container";
import { SidebarProvider } from "@/components/ui/sidebar";
// import { getLocalStorage } from "@/utils/localStorage";

export const MainLayout: FC = (): JSX.Element => {
  // const token = getLocalStorage("access_token");
  const token = "token";

  if (token) {
    return (
      <SidebarProvider>
        <AppSidebar />
        <Container />
      </SidebarProvider>
    );
  } else {
    return <Navigate to="/login" replace={true} />;
  }
};
