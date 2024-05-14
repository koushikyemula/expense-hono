import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

const expensesSchema = z.object({
  id: z.number(),
  title: z.string(),
  amount: z.number(),
});

export type Expense = z.infer<typeof expensesSchema>;

export const createPostSchema = expensesSchema.omit({ id: true });

const fakeExpenses: Expense[] = [
  { id: 1, title: "Rent", amount: 1000 },
  { id: 2, title: "Food", amount: 200 },
  { id: 3, title: "Transport", amount: 50 },
];

export const expensesRoute = new Hono()
  .get("/", async (r) => r.json({ expenses: fakeExpenses }))
  .post("/", zValidator("json", createPostSchema), async (r) => {
    const expense = await r.req.valid("json");
    fakeExpenses.push({ ...expense, id: fakeExpenses.length + 1 });
    return r.json({ expense });
  })
  .get("/total-spent", (c) => {
    const total = fakeExpenses.reduce((acc, expense) => acc + expense.amount, 0);
    return c.json({ total });
  });
