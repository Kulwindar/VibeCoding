import { z } from 'zod';

export const createTripSchema = z.object({
  destination: z.string().min(1),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  purpose: z.string().min(1),
  estimatedBudget: z.number().positive(),
});

export type CreateTripInput = z.infer<typeof createTripSchema>;
