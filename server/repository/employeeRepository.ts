import type { EmployeeModel } from '$/commonTypesWithClient/models';
import { prismaClient } from '$/service/prismaClient';
import type { Employee, EmployeeCompany, EmployeeProfile, Tip } from '@prisma/client';

const toEmployeeModel = (
  prismaEmployee: Employee & {
    profile: EmployeeProfile | null;
    EmployeeCompany: EmployeeCompany[];
    Tip: Tip[];
  }
): EmployeeModel => {
  return {
    name: prismaEmployee.name,
    email: prismaEmployee.email,
    firebaseUid: prismaEmployee.firebaseUid,
    createdAt: prismaEmployee.createdAt.getTime(),
    isDeleted: prismaEmployee.isDeleted,
    profileId: prismaEmployee.profile?.profileId,
    profileImage: prismaEmployee.profile?.profileImage ?? '/images/default.png',
    employeeCompanies: prismaEmployee.EmployeeCompany.map((ec) => ({
      id: ec.id,
      companyId: ec.companyId,
      roleId: ec.roleId,
    })),
    tips: prismaEmployee.Tip.map((tip) => ({
      id: tip.id,
      employeeId: tip.employeeId,
      companyId: tip.companyId,
      amount: tip.amount,
      createdAt: tip.createdAt.getTime(),
    })),
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
      include: { profile: true, EmployeeCompany: true, Tip: true },
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
      include: { profile: true, EmployeeCompany: true, Tip: true },
    });
    if (prismaEmployee !== null) {
      console.log(prismaEmployee);
      return toEmployeeModel(prismaEmployee);
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};
