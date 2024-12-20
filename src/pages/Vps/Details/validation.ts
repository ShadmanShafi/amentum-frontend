import { z } from "zod";

export const createNewInstallationFormSchema = () => {
  return z.object({
    templateVmid: z.string().min(1, {
      message: "You must select a VM",
    }),
    cloneName: z
      .string()
      .min(1, {
        message: "Clone Name is required",
      })
      .regex(/^\S*$/, { message: "Clone Name cannot contain spaces" }),
    user: z.string().min(1, {
      message: "User is required",
    }),
    password: z.string().min(1, {
      message: "Password is required",
    }),
  });
};

export const createPasswordResetFormSchema = () => {
  return z.object({
    user: z.string().min(1, {
      message: "User is required",
    }),
    newPassword: z.string().min(1, {
      message: "New Password is required",
    }),
  });
};
