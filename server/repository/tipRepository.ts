import type { TipData } from '$/commonTypesWithClient/models';
import { prismaClient } from '$/service/prismaClient';

export const createTipData = async (tipData: TipData, amount: string) => {
  await prismaClient.tip.create({
    data: {
      employeeId: tipData.employeeId,
      companyId: tipData.companyId,
      amount: parseInt(amount),
      feedback: tipData.feedback,
      createdAt: new Date(),
    },
  });
};
