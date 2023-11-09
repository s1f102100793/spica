import type { EmployeeModel } from '$/commonTypesWithClient/models';
import { prismaClient } from '$/service/prismaClient';
import type { Employee, EmployeeProfile } from '@prisma/client';

const toEmployeeModel = (
  prismaEmployee: Employee & { profile: EmployeeProfile | null }
): EmployeeModel => {
  return {
    name: prismaEmployee.name,
    email: prismaEmployee.email,
    firebaseUid: prismaEmployee.firebaseUid,
    createdAt: prismaEmployee.createdAt.getTime(),
    profileId: prismaEmployee.profile?.profileId,
    profileImage: prismaEmployee.profile?.profile_image ?? '/images/default.png',
  };
};

export const createEmployee = async (name: string, email: string, firebaseUid: string) => {
  try {
    console.log('createEmployee');
    const prismaEmployee = await prismaClient.employee.create({
      data: {
        name,
        email,
        firebaseUid,
        createdAt: new Date(),
        profile: { create: { profile_image: '/images/default.png', createdAt: new Date() } },
      },
      include: { profile: true },
    });
    return toEmployeeModel(prismaEmployee);
  } catch (e) {
    console.log(e);
  }
};
