import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2),
  accountType: z.enum(["personal", "business"]),
  limit: z.string(),
  message: z.string().min(10),
  privacy: z.boolean(),
});