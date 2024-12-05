import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { z } from "zod";

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

import { FormSchema } from "./validation";

const ResetPassword = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    toast.success("Email has been sent successfully");

    console.log("submitted data: ", data);
  };

  return (
    <div className="flex flex-col-reverse w-full h-screen md:flex-row">
      <div className="hidden w-full bg-center bg-cover md:block md:w-1/2 h-1/2 md:h-full bg-login-graphic"></div>

      <div className="w-full h-full bg-right-bottom bg-no-repeat md:w-1/2 bg-login-diamond-graphic">
        <AnimatedAuthFlowForm>
          <h1 className="mb-4 text-2xl font-bold text-customTextColor">
            Reset Password
          </h1>

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

              <div className="flex flex-col items-center justify-center gap-4">
                <Button className="px-10" type="submit">
                  Reset
                </Button>

                <Button
                  variant="link"
                  type="button"
                  onClick={() => navigate("/login")}
                >
                  Go back to Login
                </Button>
              </div>
            </form>
          </Form>
        </AnimatedAuthFlowForm>
      </div>
    </div>
  );
};

export default ResetPassword;
