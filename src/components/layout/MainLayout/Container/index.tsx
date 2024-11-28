import { FC } from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const Container: FC = (): JSX.Element => {
  return (
    <div className="w-full h-[100vh] overflow-x-hidden overflow-y-auto">
      <Header />
      <div className="w-full min-h-[calc(100vh-60px)] bg-[#272838] text-white bg-dot-black/[1] relative px-4 border border-transparent">
        <Outlet />
      </div>
    </div>
  );
};
