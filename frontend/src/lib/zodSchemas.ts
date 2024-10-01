import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const registerFormSchema = loginFormSchema
  .merge(
    z.object({
      firstName: z.string().min(3),
      lastName: z.string().min(3),
      address1: z.string().max(50),
      city: z.string().max(50),
      state: z.string().min(2).max(2),
      postalCode: z.string().refine(
        (val) => {
          const num = Number(val);
          if (isNaN(num) || num === 0) return false;
          if (num < 1000) return false;
          return true;
        },
        { message: "Please enter a valid postal code" }
      ),
      dateOfBirth: z.coerce.date(),
      ssn: z.string().refine(
        (val) => {
          if (val.length > 4) return false;
          const num = Number(val);
          if (isNaN(num) || num <= 0) return false;
          return true;
        },
        { message: "Invalid SSN" }
      ),
      confirmPassword: z.string().min(8),
    })
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const transferFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(4, "Transfer name is too short"),
  amount: z.string().refine(
    (val) => {
      const num = Number(val);
      if (isNaN(num) || num === 0) return false;
      return true;
    },
    { message: "Please enter a valid amount" }
  ),
  senderBankId: z.string().min(4, "Please select a valid bank account"),
  shareableId: z.string().min(8, "Please select a valid shareable Id"),
});
