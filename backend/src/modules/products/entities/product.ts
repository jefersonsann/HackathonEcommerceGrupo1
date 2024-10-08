import { z } from "zod";

const Product = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  description: z.string().min(1),
  image: z.string().nullable(),
  price: z.number().positive(),
  category: z.string().min(1),
  created_at: z.date(),
  updated_at: z.date(),
});

export type ProductSchema = z.infer<typeof Product>;

export { Product };
