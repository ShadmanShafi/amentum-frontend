import { ReactNode } from "react";

const AuthPageContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex flex-col-reverse w-full h-screen md:flex-row">
      <div className="fixed top-0 left-0 hidden w-1/2 h-full bg-center bg-cover md:block bg-login-graphic"></div>

      <div className="relative flex items-center justify-center w-full h-full overflow-y-auto bg-right-bottom bg-no-repeat md:w-1/2 bg-login-diamond-graphic md:ml-auto">
        {children}
      </div>
    </div>
  );
};

export default AuthPageContainer;
