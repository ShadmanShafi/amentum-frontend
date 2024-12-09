import { z } from "zod";

export const createFormSchema = (t: (key: string) => string) => {
  return z
    .object({
      firstName: z
        .string()
        .min(1, { message: t("registration.firstNameValidation") })
        .regex(/^[A-Za-z]+$/, {
          message: t("registration.firstNameFormatValidation"),
        }),
      lastName: z
        .string()
        .min(1, { message: t("registration.lastNameValidation") })
        .regex(/^[A-Za-z]+$/, {
          message: t("registration.lastNameFormatValidation"),
        }),
      email: z.string().email({
        message: t("registration.emailValidation"),
      }),
      phoneNo: z
        .string()
        .min(10, { message: t("registration.phoneNoValidation") })
        .regex(/^\+?[1-9]\d{1,14}$/, {
          message: t("registration.phoneNoFormatValidation"),
        }),
      password: z.string().min(6, {
        message: t("registration.passwordValidation"),
      }),
      confirmPassword: z.string().min(6, {
        message: t("registration.confirmPasswordValidation"),
      }),
      giveConsent: z.boolean().refine((val) => val === true, {
        message: t("registration.consentValidation"),
      }),
    })
    .superRefine((data, ctx) => {
      if (data.password !== data.confirmPassword) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["confirmPassword"],
          message: t("registration.confirmPasswordMatchValidation"),
        });
      }
    });
};
