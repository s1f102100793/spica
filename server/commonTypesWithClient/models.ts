import { z } from 'zod';
import { companyIdParser, taskIdParser, userIdParser } from '../service/idParsers';
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
  companyId: z.string(),
  roleId: z.number(),
  companyName: z.string(),
});

export type EmployeeCompaniesModel = z.infer<typeof employeeCompaniesParser>;

export const tipParser = z.object({
  id: z.number(),
  employeeId: z.string(),
  companyId: z.string(),
  amount: z.number(),
  createdAt: z.number(),
});

export type TipModel = z.infer<typeof tipParser>;

export const companyTipParser = z.object({
  id: z.number(),
  companyId: z.string(),
  amount: z.number(),
  createdAt: z.number(),
});

export type CompanyTipModel = z.infer<typeof companyTipParser>;

export const employeeParser = z.object({
  name: z.string(),
  email: z.string().email(),
  firebaseUid: userIdParser,
  createdAt: z.number(),
  isDeleted: z.boolean(),
  profileId: z.number().optional(),
  profileImage: z.string(),
  employeeCompanies: z.array(employeeCompaniesParser),
  tips: z.array(tipParser),
});

export type EmployeeModel = z.infer<typeof employeeParser>;

export const roleParser = z.object({
  id: z.number(),
  roleName: z.string(),
});

export type RoleModel = z.infer<typeof roleParser>;

export const employeeCompanyParser = z.object({
  id: z.number(),
  employeeId: z.string(),
  employee: employeeParser,
  companyId: z.string(),
  role: roleParser,
});

export type EmployeeCompanyModel = z.infer<typeof employeeCompanyParser>;

export const employeeNameResponseParser = z.object({
  name: z.string(),
});

export type EmployeeNameResponseModel = z.infer<typeof employeeNameResponseParser>;

export const employeeCompanyResponseParser = z.object({
  id: z.number(),
  employeeId: z.string(),
  employee: employeeNameResponseParser,
  companyId: z.string(),
  role: roleParser,
});

export type EmployeeCompanyResponseModel = z.infer<typeof employeeCompanyResponseParser>;

export const companyParser = z.object({
  id: companyIdParser,
  name: z.string(),
  address: z.string(),
  description: z.string(),
  tips: z.array(tipParser),
  employeeCompany: z.array(employeeCompanyParser),
  companyTip: z.array(companyTipParser),
});

export type CompanyModel = z.infer<typeof companyParser>;

export const companyResponseParser = z.object({
  id: companyIdParser.optional(),
  name: z.string().optional(),
  address: z.string().optional(),
  description: z.string().optional(),
  tips: z.array(tipParser).optional(),
  employeeCompany: z.array(employeeCompanyResponseParser).optional(),
  companyTip: z.array(companyTipParser).optional(),
});

export type CompanyResponseModel = z.infer<typeof companyResponseParser>;
