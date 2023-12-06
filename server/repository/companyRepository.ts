import type { CompanyId } from '$/commonTypesWithClient/ids';
import type { CompanyModel } from '$/commonTypesWithClient/models';
import { prismaClient } from '$/service/prismaClient';

type SelectFields = Record<string, boolean>;

const createSelectFields = (fields: string): SelectFields => {
  let selectFields: SelectFields = {};
  const fieldsArray = fields.split(',');

  if (fieldsArray.includes('*') && fieldsArray.length > 1) {
    throw new Error("Invalid fields: '*' cannot be combined with other fields");
  }

  if (fieldsArray.includes('*')) {
    selectFields = {
      id: true,
      name: true,
      address: true,
      description: true,
      tips: true,
      EmployeeCompany: true,
      CompanyTip: true,
    };
  } else {
    fieldsArray.forEach((field) => {
      selectFields[field] = true;
    });
  }

  return selectFields;
};

export const getCompanyInfo = async (
  companyId: CompanyId,
  fields: string
): Promise<Partial<CompanyModel>> => {
  const selectFields = createSelectFields(fields);

  const prismaCompanyInfo = await prismaClient.company.findUnique({
    where: { id: companyId },
    select: selectFields,
  });

  return prismaCompanyInfo as Partial<CompanyModel>;
};

export const getAllCompanyInfo = async (fields: string): Promise<Partial<CompanyModel[]>> => {
  const selectFields = createSelectFields(fields);

  const prismaAllCompanyInfo = await prismaClient.company.findMany({
    select: selectFields,
  });

  return prismaAllCompanyInfo as unknown as Partial<CompanyModel[]>;
};
