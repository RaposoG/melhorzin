import { z, ZodType } from "zod";
import * as interfaces from "@/types/interfaces";

export const ContactSchema: ZodType<interfaces.ContactFormProps> = z.object({
  name: z.string().min(1, { message: "Required field" }),
  email: z
    .string()
    .min(1, { message: "Required field" })
    .email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Required field" }),
});
