import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { useIsMobile } from "@/hooks/use-mobile";
import { useLoginMutation } from "@/store/apis/authApis";

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
import { AnimatedAuthFlowForm } from "@/components/shared/AnimatedPages";
import AuthPageContainer from "@/components/shared/AuthPageContainer";

import { AmentumLogo } from "@/assets/AmentumLogo";
import { createFormSchema } from "./validation";
import { setLocalStorage } from "@/utils/storageUtils";

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [login, { isLoading }] = useLoginMutation();

  const [showPassword, setShowPassword] = useState(false);

  const formSchema = createFormSchema(t);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await login(data).unwrap();
      console.log("Login successful: ", response);

      navigate("/server-management/servers/vps");
    } catch (error: Error | any) {
      console.error("Login failed: ", error);
      const errorMessage = error.data?.message || error.message || "";
      toast.error(`Login failed ${errorMessage}`);

      // setLocalStorage("accessToken", "token");
      // navigate("/server-management/servers/vps");
    }
  };

  return (
    <AuthPageContainer>
      <AnimatedAuthFlowForm>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="px-4 space-y-4 md:px-10 xl:w-1/2 lg:w-2/3"
          >
            <div className="flex justify-center mb-14">
              <AmentumLogo scale={isMobile ? 0.6 : 0.8} />
            </div>

            <h1 className="mb-4 text-2xl font-bold text-center text-customTextColor">
              {t("login.header")}
            </h1>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-customTextColorSecondary">
                    {t("login.email")}
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
                    {t("login.password")}
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
                {t("login.forgotPassword")}
              </Button>

              <Button
                className="px-10"
                type="submit"
                disabled={isLoading}
                // loading={true}
              >
                {t("login.signIn")}
              </Button>

              <h1 className="text-center">
                <span className="text-customTextColor">
                  {t("login.noAccount")}{" "}
                </span>
                <span>
                  <Button
                    className="p-0"
                    variant="link"
                    type="button"
                    onClick={() => navigate("/registration")}
                  >
                    {t("login.clickToSignUp")}
                  </Button>
                </span>
              </h1>
            </div>
          </form>
        </Form>
      </AnimatedAuthFlowForm>
    </AuthPageContainer>
  );
};

export default Login;
