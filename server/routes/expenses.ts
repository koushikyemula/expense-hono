import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

const expensesSchema = z.object({
  id: z.number(),
  title: z.string(),
  amount: z.number(),
});

export type expenseType = z.infer<typeof expensesSchema>;

export const createPostSchema = expensesSchema.omit({ id: true });
