import type { UserId } from '$/commonTypesWithClient/ids';
import { prismaClient } from '$/service/prismaClient';

export const checkAdmin = async (firebaseUid: UserId): Promise<boolean> => {
  try {
    const admin = await prismaClient.admin.findUnique({
      where: { firebaseUid },
    });

    return admin !== null;
  } catch (e) {
    console.log(e);
    return false;
  }
};
