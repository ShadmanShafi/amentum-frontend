import { ReactNode } from "react";

const AuthPageContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative w-full">
      <div className="fixed top-0 left-0 hidden w-1/2 h-full bg-center bg-cover md:block bg-login-graphic"></div>

      <div className="bg-right-bottom bg-no-repeat md:w-1/2 bg-login-diamond-graphic md:ml-auto">
        {children}
      </div>
    </div>
  );
};

export default AuthPageContainer;
