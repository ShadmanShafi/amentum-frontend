import { z } from "zod";

export const createPasswordResetFormSchema = (t: (key: string) => string) => {
  return z.object({
    user: z.string().min(1, {
      message: "User is required",
    }),
    newPassword: z.string().min(1, {
      message: "New Password is required",
    }),
  });
};
