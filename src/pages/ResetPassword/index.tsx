import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { useIsMobile } from "@/hooks/use-mobile";

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

const ResetPassword = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const formSchema = createFormSchema(t);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    toast.success(t("resetPassword.submitToastMsg"));

    console.log("submitted data: ", data);
  };

  return (
    <AuthPageContainer>
      <AnimatedAuthFlowForm>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="px-4 space-y-4 xl:w-1/2 lg:w-2/3 md:px-10"
          >
            <div className="flex justify-center mb-14">
              <AmentumLogo scale={isMobile ? 0.6 : 0.8} />
            </div>

            <h1 className="mb-4 text-2xl font-bold text-center text-customTextColor">
              {t("resetPassword.header")}
            </h1>

            <h6 className="text-customTextColorSecondary text-wrap">
              Enter your email address and we’ll send you an email with
              instructions to reset your password
            </h6>

            <h6 className="text-customTextColorSecondary text-wrap"></h6>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-customTextColorSecondary">
                    {t("resetPassword.email")}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col items-center justify-center gap-4">
              <Button className="px-10" type="submit">
                {t("resetPassword.reset")}
              </Button>

              <Button
                variant="link"
                type="button"
                onClick={() => navigate("/login")}
              >
                {t("resetPassword.backToLogin")}
              </Button>
            </div>
          </form>
        </Form>
      </AnimatedAuthFlowForm>
    </AuthPageContainer>
  );
};

export default ResetPassword;
