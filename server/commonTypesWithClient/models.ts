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
  id: z.number().optional(),
  companyId: companyIdParser.optional(),
  employeeId: userIdParser.optional(),
  roleId: z.number().optional(),
  companyName: z.string().optional(),
});

export type EmployeeCompaniesModel = z.infer<typeof employeeCompaniesParser>;

export const tipParser = z.object({
  id: z.number(),
  employeeId: userIdParser,
  companyId: companyIdParser,
  amount: z.number(),
  createdAt: z.number(),
});

export type TipModel = z.infer<typeof tipParser>;

export const companyTipParser = z.object({
  id: z.number(),
  companyId: companyIdParser,
  amount: z.number(),
  createdAt: z.number(),
});

export type CompanyTipModel = z.infer<typeof companyTipParser>;

export const employeeProfileParser = z.object({
  id: z.number().optional(),
  employeeId: userIdParser.optional(),
  profileImage: z.string().optional(),
  createdAt: z.number().optional(),
  updatedAt: z.number().optional(),
});

export type EmployeeProfileModel = z.infer<typeof employeeProfileParser>;

export const employeeParser = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  firebaseUid: userIdParser.optional(),
  createdAt: z.number().optional(),
  isDeleted: z.boolean().optional(),
  profile: employeeProfileParser.optional(),
  employeeCompanies: z.array(employeeCompaniesParser).optional(),
  tips: z.array(tipParser).optional(),
});

export type EmployeeModel = z.infer<typeof employeeParser>;

export const roleParser = z.object({
  id: z.number(),
  roleName: z.string(),
});

export type RoleModel = z.infer<typeof roleParser>;

export const employeeCompanyParser = z.object({
  id: z.number(),
  employeeId: userIdParser,
  employee: employeeParser,
  companyId: companyIdParser,
  role: roleParser,
});

export type EmployeeCompanyModel = z.infer<typeof employeeCompanyParser>;

export const employeeNameParser = z.object({
  name: z.string(),
});

export type EmployeeNameeModel = z.infer<typeof employeeNameParser>;

export const employeeCompanyResponseParser = z.object({
  id: z.number(),
  employeeId: userIdParser,
  employee: employeeNameParser,
  companyId: companyIdParser,
  role: roleParser,
});

export type EmployeeCompanyResponseModel = z.infer<typeof employeeCompanyResponseParser>;

export const companyParser = z.object({
  id: companyIdParser.optional(),
  name: z.string().optional(),
  address: z.string().optional(),
  description: z.string().optional(),
  tips: z.array(tipParser).optional(),
  employeeCompany: z.array(employeeCompanyParser).optional(),
  companyTip: z.array(companyTipParser).optional(),
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

export type TipPageEmployeeCompanyModel = z.infer<typeof TipPageEmployeeCompanyParser>;

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

export const mypageEmployeeCompanyParser = z.object({
  companyId: companyIdParser,
  companyName: z.string(),
  roleId: z.number(),
});

export const EmployeeMypagetipParser = z.object({
  id: z.number(),
  companyId: companyIdParser,
  amount: z.number(),
  createdAt: z.number(),
});

export const employeeMypageParser = z.object({
  name: z.string(),
  profileImage: z.string(),
  employeeCompany: z.array(mypageEmployeeCompanyParser),
  tips: z.array(EmployeeMypagetipParser),
});

export type EmployeeMypageModel = z.infer<typeof employeeMypageParser>;
