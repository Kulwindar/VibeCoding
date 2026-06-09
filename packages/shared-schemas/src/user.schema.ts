import { z } from 'zod';

export const createUserSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  department: z.string().min(1),
  role: z.enum(['employee', 'manager', 'finance_admin', 'hr_admin', 'super_admin']),
  managerId: z.string().optional(),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
