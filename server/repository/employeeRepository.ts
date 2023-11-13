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
    profileImage: prismaEmployee.profile?.profileImage ?? '/images/default.png',
  };
};

export const createEmployee = async (name: string, email: string, firebaseUid: string) => {
  try {
    const prismaEmployee = await prismaClient.employee.create({
      data: {
        name,
        email,
        firebaseUid,
        createdAt: new Date(),
        profile: { create: { profileImage: '/images/default.png', createdAt: new Date() } },
      },
      include: { profile: true },
    });
    return toEmployeeModel(prismaEmployee);
  } catch (e) {
    console.log(e);
  }
};

export const getEmployee = async (firebaseUid: string): Promise<EmployeeModel | null> => {
  try {
    const prismaEmployee = await prismaClient.employee.findUnique({
      where: { firebaseUid },
      include: { profile: true },
    });
    if (prismaEmployee) {
      return toEmployeeModel(prismaEmployee);
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};
