import { z } from "zod";

export const FormSchema = z
  .object({
    firstName: z
      .string()
      .min(1, { message: "Please enter your First Name" })
      .regex(/^[A-Za-z]+$/, {
        message: "First Name can only contain alphabets",
      }),
    lastName: z
      .string()
      .min(1, { message: "Please enter your Last Name" })
      .regex(/^[A-Za-z]+$/, {
        message: "Last Name can only contain alphabets",
      }),
    email: z.string().email({
      message: "Please enter a valid Email address",
    }),
    phoneNo: z
      .string()
      .min(10, { message: "Phone Number has to be more than 9 digits" })
      .regex(/^\+?[1-9]\d{1,14}$/, {
        message: "Phone Number can only contain digits",
      }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters long",
    }),
    confirmPassword: z.string().min(6, {
      message: "Password must be at least 6 characters long",
    }),
    giveConsent: z.boolean().refine((val) => val === true, {
      message: "You must agree to the terms and conditions",
    }),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["confirmPassword"],
        message: "Passwords do not match",
      });
    }
  });
