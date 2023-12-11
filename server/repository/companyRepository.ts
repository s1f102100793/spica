import type { CompanyResponseModel } from '$/commonTypesWithClient/models';
import { companyIdParser } from '$/service/idParsers';
import { prismaClient } from '$/service/prismaClient';
import type { Company, CompanyTip, EmployeeCompany, Tip } from '@prisma/client';

type SelectFields = Record<
  string,
  boolean | { select: Record<string, boolean | { select: Record<string, boolean> }> }
>;

const toCompanyModel = (
  prismaCompany: Partial<Company> & {
    Tip?: Tip[];
    EmployeeCompany?: (EmployeeCompany & { role: { roleName: string } })[];
    CompanyTip?: CompanyTip[];
  }
): CompanyResponseModel => {
  return {
    id:
      prismaCompany?.id !== null && prismaCompany?.id !== undefined
        ? companyIdParser.parse(prismaCompany.id)
        : undefined,
    name: prismaCompany?.name,
    address: prismaCompany?.address,
    description: prismaCompany?.description,
    tips: prismaCompany?.Tip?.map((tip) => ({
      id: tip.id,
      employeeId: tip.employeeId,
      companyId: tip.companyId,
      amount: tip.amount,
      createdAt: tip.createdAt.getTime(),
    })),
    employeeCompany: prismaCompany?.EmployeeCompany?.map((ec) => ({
      id: ec.id,
      employeeId: ec.employeeId,
      companyId: ec.companyId,
      role: {
        id: ec.roleId,
        roleName: ec.role.roleName,
      },
    })),
    companyTip: prismaCompany?.CompanyTip?.map((ct) => ({
      id: ct.id,
      companyId: ct.companyId,
      amount: ct.amount,
      createdAt: ct.createdAt.getTime(),
    })),
  };
};

const createSelectFieldForEmployeeCompany = () => ({
  select: {
    id: true,
    employeeId: true,
    companyId: true,
    roleId: true,
    role: {
      select: {
        id: true,
        roleName: true,
      },
    },
  },
});

const createSelectFields = (fields: string): SelectFields => {
  const fieldsArray = fields.split(',');
  const selectFields: SelectFields = {};

  if (fieldsArray.includes('*')) {
    if (fieldsArray.length > 1) {
      throw new Error("Invalid fields: '*' cannot be combined with other fields");
    }
    return {
      id: true,
      name: true,
      address: true,
      description: true,
      tips: true,
      EmployeeCompany: createSelectFieldForEmployeeCompany(),
      CompanyTip: true,
    };
  }

  fieldsArray.forEach((field) => {
    selectFields[field] =
      field === 'EmployeeCompany' ? createSelectFieldForEmployeeCompany() : true;
  });

  return selectFields;
};

export const getCompanyInfo = async (companyId: string, fields: string) => {
  const selectFields = createSelectFields(fields);

  const prismaCompanyInfo = await prismaClient.company.findUnique({
    where: { id: companyId },
    select: selectFields,
  });

  if (!prismaCompanyInfo) {
    throw new Error('Company not found');
  }

  return toCompanyModel(prismaCompanyInfo);
};

export const getAllCompanyInfo = async (fields: string) => {
  const selectFields = createSelectFields(fields);

  const prismaAllCompanyInfo = await prismaClient.company.findMany({
    select: selectFields,
  });

  return prismaAllCompanyInfo.map((company) => toCompanyModel(company));
};
