import { z } from "zod";

export const createFormSchema = (t: (key: string) => string) => {
  return z.object({
    email: z.string().email({
      message: t("resetPassword.emailValidation"),
    }),
  });
};
