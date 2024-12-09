import { z } from "zod";

export const createFormSchema = (t: (key: string) => string) => {
  return z.object({
    email: z.string().email({
      message: t("login.emailValidation"),
    }),
    password: z.string().min(1, {
      message: t("login.passwordValidation"),
    }),
  });
};
