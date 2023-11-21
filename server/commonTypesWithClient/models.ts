import { z } from 'zod';
import { taskIdParser } from '../service/idParsers';
import type { UserId } from './ids';

export type UserModel = {
  id: UserId;
  email: string;
  displayName: string | undefined;
  photoURL: string | undefined;
};

export const taskParser = z.object({
  id: taskIdParser,
  label: z.string(),
  done: z.boolean(),
  created: z.number(),
});

export type TaskModel = z.infer<typeof taskParser>;

export const employeeCompaniesParser = z.object({
  id: z.number(),
  companyId: z.number(),
  roleId: z.number(),
});

export type EmployeeCompaniesModel = z.infer<typeof employeeCompaniesParser>;

export const tipParser = z.object({
  id: z.number(),
  employeeId: z.string(),
  companyId: z.number(),
  amount: z.number(),
  createdAt: z.number(),
});

export type TipModel = z.infer<typeof tipParser>;
export const employeeParser = z.object({
  name: z.string(),
  email: z.string().email(),
  firebaseUid: z.string(),
  createdAt: z.number(),
  isDeleted: z.boolean(),
  profileId: z.number().optional(),
  profileImage: z.string(),
  employeeCompanies: z.array(employeeCompaniesParser),
  tips: z.array(tipParser),
});

export type EmployeeModel = z.infer<typeof employeeParser>;
