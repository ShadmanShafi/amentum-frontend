import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { z } from "zod";

import { toast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const FormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid Email address",
  }),

  password: z.string().min(1, {
    message: "Please enter a Password",
  }),
});

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <div className="flex flex-col-reverse w-full h-screen md:flex-row">
      <div className="hidden w-full bg-center bg-cover md:block md:w-1/2 h-1/2 md:h-full bg-login-graphic"></div>

      <div className="flex flex-col items-center justify-center w-full h-full bg-right-bottom bg-no-repeat md:w-1/2 bg-login-diamond-graphic">
        <h1 className="mb-4 text-2xl font-bold">Login</h1>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-customTextColorSecondary">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-customTextColorSecondary">
                    Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder=""
                        {...field}
                      />
                      <div
                        className="absolute inset-y-0 right-0 flex items-center px-2 cursor-pointer"
                        onMouseDown={() => setShowPassword(true)}
                        onMouseUp={() => setShowPassword(false)}
                        onMouseLeave={() => setShowPassword(false)}
                      >
                        {showPassword ? (
                          <EyeOffIcon className="w-5 h-5 text-gray-500" />
                        ) : (
                          <EyeIcon className="w-5 h-5 text-gray-500" />
                        )}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col items-center justify-center gap-4">
              <Button
                variant="link"
                type="button"
                onClick={() => navigate("/reset-password")}
              >
                Forgot Password
              </Button>

              <Button className="text-white " type="submit">
                Sign In
              </Button>

              <h1>
                Don’t have an account?{" "}
                <span>
                  <Button
                    className="p-0"
                    variant="link"
                    type="button"
                    onClick={() => navigate("/registration")}
                  >
                    Click here to sign up
                  </Button>
                </span>
              </h1>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
