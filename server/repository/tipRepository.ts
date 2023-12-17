import type { TipData } from '$/commonTypesWithClient/models';
import { prismaClient } from '$/service/prismaClient';

export const tipRepository = {
  save: async (tipData: TipData, amount: number) => {
    await prismaClient.tip.create({
      data: {
        employeeId: tipData.employeeId,
        companyId: tipData.companyId,
        amount,
        feedback: tipData.feedback,
        createdAt: new Date(),
      },
    });
  },
};
