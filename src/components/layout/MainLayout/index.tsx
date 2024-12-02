import { FC } from "react";
import { Navigate } from "react-router-dom";

import { AppSidebar } from "@/components/layout/MainLayout/AppSidebar";
import { Container } from "@/components/layout/MainLayout/Container";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/components/layout/MainLayout/Header";
// import { getLocalStorage } from "@/utils/localStorage";

export const MainLayout: FC = (): JSX.Element => {
  // const token = getLocalStorage("access_token");
  const token = "token";

  if (token) {
    return (
      <SidebarProvider>
        <div className="flex flex-col w-full h-screen">
          <div className="fixed top-0 left-0 w-full h-[60px] md:h-[102px]">
            <Header />
          </div>

          <div className="flex flex-1 mt-[60px] md:mt-[102px] overflow-hidden">
            <AppSidebar />
            <Container />
          </div>
        </div>
      </SidebarProvider>
    );
  } else {
    return <Navigate to="/login" replace={true} />;
  }
};
