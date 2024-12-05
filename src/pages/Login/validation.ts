import { z } from "zod";

export const FormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid Email address",
  }),

  password: z.string().min(1, {
    message: "Please enter a Password",
  }),
});
