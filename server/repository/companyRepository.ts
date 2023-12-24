import type {
  CompanyTipPageInfoModel,
  EmployeeCompanyPairModel,
  EmployeeTipPageInfoModel,
} from '$/commonTypesWithClient/models';
import { companyIdParser, userIdParser } from '$/service/idParsers';
import { prismaClient } from '$/service/prismaClient';

const toEmployeeCompanyPairsModel = (
  prismaEmployeeCompanies: {
    EmployeeCompany: {
      employeeId: string;
      companyId: string;
    }[];
  }[]
): EmployeeCompanyPairModel[] => {
  return prismaEmployeeCompanies.flatMap((company) =>
    company.EmployeeCompany.map((empComp) => ({
      employeeId: userIdParser.parse(empComp.employeeId),
      companyId: companyIdParser.parse(empComp.companyId),
    }))
  );
};

export const allCompanyRepository = {
  getCompanyId: async () => {
    const prismaAllCompanyId = await prismaClient.company.findMany({
      select: {
        id: true,
      },
    });
    return prismaAllCompanyId.map((company) => companyIdParser.parse(company.id));
  },
  getEmployeeCompany: async () => {
    const prismaAllCompanyEmployeeCompany = await prismaClient.company.findMany({
      select: {
        EmployeeCompany: {
          select: { employeeId: true, companyId: true },
        },
      },
    });
    return toEmployeeCompanyPairsModel(prismaAllCompanyEmployeeCompany);
  },
};

const toCompanyTipPageInfoModel = (prismaCompanyTipPageInfoModel: {
  id: string;
  name: string;
}): CompanyTipPageInfoModel => ({
  id: companyIdParser.parse(prismaCompanyTipPageInfoModel.id),
  name: prismaCompanyTipPageInfoModel.name,
});

const toEmployeeTipPageInfoModel = (prismaTipPageCompanyInfo: {
  id: string;
  name: string;
  EmployeeCompany: {
    employeeId: string;
    employee: {
      name: string;
    };
  }[];
}): EmployeeTipPageInfoModel => ({
  id: companyIdParser.parse(prismaTipPageCompanyInfo.id),
  name: prismaTipPageCompanyInfo.name,
  EmployeeCompany: prismaTipPageCompanyInfo.EmployeeCompany.map((ec) => ({
    employeeId: userIdParser.parse(ec.employeeId),
    employee: {
      name: ec.employee.name,
    },
  })),
});
export const companyRepository = {
  getCompanyTipPageInfo: async (companyId: string) => {
    const prismaEmployeeInfo = await prismaClient.company.findUnique({
      where: { id: companyId },
      select: {
        id: true,
        name: true,
      },
    });

    if (!prismaEmployeeInfo) {
      return new Error('Company not found');
    }
    return toCompanyTipPageInfoModel(prismaEmployeeInfo);
  },
  getEmployeeTipPageInfo: async (companyId: string) => {
    const prismaCompanyInfo = await prismaClient.company.findUnique({
      where: { id: companyId },
      select: {
        id: true,
        name: true,
        EmployeeCompany: {
          select: {
            employeeId: true,
            employee: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    if (!prismaCompanyInfo) {
      return new Error('Company not found');
    }

    return toEmployeeTipPageInfoModel(prismaCompanyInfo);
  },
};
