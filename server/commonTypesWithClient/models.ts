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

export const employeeProfileParser = z.object({
  id: z.number().optional(),
  employeeId: userIdParser.optional(),
  profileImage: z.string().optional(),
  createdAt: z.number().optional(),
  updatedAt: z.number().optional(),
});

export const roleParser = z.object({
  id: z.number(),
  roleName: z.string(),
});

export const employeeNameParser = z.object({
  name: z.string(),
});

export type TipData = {
  companyId: string;
  employeeId: string;
  feedback: string;
  merchantPaymentId: string;
};

export const EmployeeCompanyPairParser = z.object({
  employeeId: userIdParser,
  companyId: companyIdParser,
});

export type EmployeeCompanyPairModel = z.infer<typeof EmployeeCompanyPairParser>;

export const TipPageEmployeeCompanyParser = z.object({
  employeeId: userIdParser,
  employee: employeeNameParser,
});

export const EmployeeTipPageInfoParser = z.object({
  id: companyIdParser,
  name: z.string(),
  EmployeeCompany: z.array(TipPageEmployeeCompanyParser),
});

export type EmployeeTipPageInfoModel = z.infer<typeof EmployeeTipPageInfoParser>;

export const CompanyTipPageInfoParser = z.object({
  id: companyIdParser,
  name: z.string(),
});

export type CompanyTipPageInfoModel = z.infer<typeof CompanyTipPageInfoParser>;

export const CompanyDashboardTipsParser = z.object({
  employeeId: userIdParser,
  employeeName: z.string(),
  amount: z.number(),
  feedback: z.string(),
  createdAt: z.number(),
});

export const CompanyDashboardEmployeeCompanyParser = z.object({
  employeeId: userIdParser,
  employeeName: z.string(),
});

export const CompanyDashboardCompanyTipParser = z.object({
  amount: z.number(),
  feedback: z.string(),
  createdAt: z.number(),
});

export const CompanyDashboardParser = z.object({
  name: z.string(),
  tips: z.array(CompanyDashboardTipsParser),
  EmployeeCompany: z.array(CompanyDashboardEmployeeCompanyParser),
  companyTip: z.array(CompanyDashboardCompanyTipParser),
});

export type CompanyDashboardModel = z.infer<typeof CompanyDashboardParser>;
export const employeeProfilePageParser = z.object({
  name: z.string(),
  email: z.string().email(),
  profileImage: z.string(),
});

export type EmployeeProfilePageModel = z.infer<typeof employeeProfilePageParser>;

export const employeeMyPageEmployeeCompanyParser = z.object({
  companyId: companyIdParser,
  companyName: z.string(),
  roleId: z.number(),
});

export const employeeMyPagetipParser = z.object({
  id: z.number(),
  companyId: companyIdParser,
  amount: z.number(),
  createdAt: z.number(),
});

export const employeeMyPageParser = z.object({
  name: z.string(),
  profileImage: z.string(),
  employeeCompany: z.array(employeeMyPageEmployeeCompanyParser),
  tips: z.array(employeeMyPagetipParser),
});

export type EmployeeMyPageModel = z.infer<typeof employeeMyPageParser>;
