import { FC } from "react";
import { Outlet } from "react-router-dom";

export const Container: FC = (): JSX.Element => {
  return (
    <div className="w-full h-[100vh] bg-[#e9ecef] overflow-x-hidden overflow-y-auto">
      <div className="min-h-[calc(100vh-60px)] mx-7 my-4 bg-white">
        <Outlet />
      </div>
    </div>
  );
};
