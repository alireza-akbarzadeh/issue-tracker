import z from "zod";

const productSchema = z.object({
  name: z.string().min(2),
  price: z.number().min(1).max(1000000),
});

export default productSchema;
