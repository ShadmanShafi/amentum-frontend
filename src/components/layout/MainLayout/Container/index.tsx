import { FC } from "react";
import { Outlet } from "react-router-dom";

export const Container: FC = (): JSX.Element => {
  return (
    <div className="flex-1 max-h-[calc(100vh-60px)] md:max-h-[calc(100vh-96px)] bg-[#e9ecef] overflow-x-hidden overflow-y-auto">
      <div className="my-4 bg-white mx-7">
        <Outlet />
      </div>
    </div>
  );
};
