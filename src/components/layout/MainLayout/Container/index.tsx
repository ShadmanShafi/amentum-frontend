import { FC } from "react";
import { Outlet } from "react-router-dom";

export const Container: FC = (): JSX.Element => {
  return (
    <div className="flex-1 bg-[#e9ecef] overflow-x-hidden overflow-y-auto">
      <div className="mt-4 bg-white mx-7 min-h-[calc(100vh-60px)] md:min-h-[calc(100vh-118px)]">
        <Outlet />
      </div>
    </div>
  );
};
