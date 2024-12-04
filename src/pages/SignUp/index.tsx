import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SignUp = () => {
  return (
    <div className="flex flex-col-reverse w-full h-screen md:flex-row">
      <div className="w-full bg-center bg-cover md:w-1/2 h-1/2 md:h-full bg-login-graphic"></div>

      <div className="flex flex-col items-center justify-center w-full p-8 sm:p-12 md:p-16 lg:p-32 xl:p-56 md:w-1/2 h-1/2 md:h-full">
        <h1 className="mb-4 text-2xl font-bold">Sign Up</h1>
        <Input
          title="Email"
          type="text"
          placeholder="Email"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <Input
          title="Password"
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <Button className="w-full p-2 font-bold text-white bg-blue-500 rounded">
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
