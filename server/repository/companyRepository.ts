import type { CompanyId } from '$/commonTypesWithClient/ids';
import { prismaClient } from '$/service/prismaClient';

export const allCompanyIds = async (): Promise<CompanyId[]> => {
  try {
    const prismaAllCompanyIds = await prismaClient.company.findMany({
      select: { id: true },
    });

    return prismaAllCompanyIds.map((company) => company.id as CompanyId);
  } catch (error) {
    console.error('Error fetching company IDs:', error);
    throw error;
  }
};

export const getCompanyInfo = async (
  companyId: CompanyId
): Promise<{ id: CompanyId; name: string }> => {
  try {
    const prismaCompanyInfo = await prismaClient.company.findUnique({
      where: { id: companyId },
      select: { id: true, name: true },
    });

    if (!prismaCompanyInfo) {
      throw new Error('Company not found');
    }

    return {
      id: prismaCompanyInfo.id as CompanyId,
      name: prismaCompanyInfo.name,
    };
  } catch (error) {
    console.error('Error posting company info:', error);
    throw error;
  }
};
