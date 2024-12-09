import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
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
import { Checkbox } from "@/components/ui/checkbox";
import { AnimatedAuthFlowForm } from "@/components/shared/AnimatedPages";
import AuthPageContainer from "@/components/shared/AuthPageContainer";

import { FormSchema } from "./validation";

const SignUp = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNo: "",
      password: "",
      confirmPassword: "",
      giveConsent: false,
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log("submitted data: ", data);

    navigate("/login");
  };

  return (
    <AuthPageContainer>
      <AnimatedAuthFlowForm>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="px-4 space-y-4 md:px-10"
          >
            <h1 className="mb-4 text-2xl font-bold text-center text-customTextColor">
              Sign Up
            </h1>

            <div className="flex flex-col gap-4 sm:flex-row">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-customTextColorSecondary">
                      First Name
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
                name="lastName"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-customTextColorSecondary">
                      Last Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
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
                name="phoneNo"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-customTextColorSecondary">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="flex-1">
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

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-customTextColorSecondary">
                      Confirm Password
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
            </div>

            <FormField
              control={form.control}
              name="giveConsent"
              render={({ field }) => (
                <FormItem className="flex justify-center p-2 space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>

                  <div className="flex flex-col gap-1">
                    <FormLabel className="cursor-pointer text-customTextColorSecondary">
                      I agree with the terms of use
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <div className="flex flex-col items-center justify-center gap-4">
              <Button className="px-10" type="submit">
                Sign Up
              </Button>

              <h1 className="text-center">
                <span className="text-customTextColor">
                  Already have an account?{" "}
                </span>
                <span>
                  <Button
                    className="p-0"
                    variant="link"
                    type="button"
                    onClick={() => navigate("/login")}
                  >
                    Click here to log in
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

export default SignUp;
