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

export const postCompanyInfo = async (
  companyId: CompanyId
): Promise<{ id: string; name: string }> => {
  try {
    const prismaCompanyInfo = await prismaClient.company.findUnique({
      where: { id: companyId },
      select: { id: true, name: true },
    });

    if (!prismaCompanyInfo) {
      throw new Error('Company not found');
    }

    return prismaCompanyInfo;
  } catch (error) {
    console.error('Error posting company info:', error);
    throw error;
  }
};
