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

export const createSnapshotFormSchema = () => {
  return z.object({
    snapshot_name: z
      .string()
      .min(1, {
        message: "Snapshot name is required",
      })
      .regex(/^\S*$/, { message: "Snapshot name cannot contain spaces" }),
    description: z.string().min(1, {
      message: "Description is required",
    }),
  });
};

export const updateSnapshotFormSchema = () => {
  return z.object({
    description: z.string().min(1, {
      message: "Description is required",
    }),
  });
};
