import type { CompanyResponseModel } from '$/commonTypesWithClient/models';
import { companyIdParser } from '$/service/idParsers';
import { prismaClient } from '$/service/prismaClient';
import type { Company, CompanyTip, EmployeeCompany, Tip } from '@prisma/client';

type SelectFields = Record<string, boolean>;

const toCompanyModel = (
  prismaCompany: Partial<Company> & {
    tip?: Tip[];
    employeeCompany?: (EmployeeCompany & { role: { roleName: string } })[];
    companyTip?: CompanyTip[];
  }
): CompanyResponseModel => {
  return {
    id: companyIdParser.parse(prismaCompany?.id),
    name: prismaCompany?.name,
    address: prismaCompany?.address,
    description: prismaCompany?.description,
    tips: prismaCompany?.tip?.map((tip) => ({
      id: tip.id,
      employeeId: tip.employeeId,
      companyId: tip.companyId,
      amount: tip.amount,
      createdAt: tip.createdAt,
    })),
    employeeCompany: prismaCompany?.employeeCompany?.map((ec) => ({
      id: ec.id,
      employeeId: ec.employeeId,
      companyId: ec.companyId,
      role: {
        id: ec.roleId,
        roleName: ec.role.roleName,
      },
    })),
    companyTip: prismaCompany?.companyTip?.map((ct) => ({
      id: ct.id,
      companyId: ct.companyId,
      amount: ct.amount,
      createdAt: ct.createdAt,
    })),
  };
};

const createSelectFields = (fields: string): SelectFields => {
  const selectFields: SelectFields = {};
  const fieldsArray = fields.split(',');

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
      EmployeeCompany: true,
      CompanyTip: true,
    };
  }

  fieldsArray.forEach((field) => {
    selectFields[field] = true;
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
