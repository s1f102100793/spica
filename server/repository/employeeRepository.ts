import type { EmployeeModel } from '$/commonTypesWithClient/models';
import { prismaClient } from '$/service/prismaClient';
import type { Employee } from '@prisma/client';

const toEmployeeModel = (prismaEmployee: Employee): EmployeeModel => ({
  name: prismaEmployee.name,
  email: prismaEmployee.email,
  firebaseUid: prismaEmployee.firebaseUid,
  createdAt: prismaEmployee.createdAt.getTime(),
});

export const createEmployee = async (name: string, email: string, firebaseUid: string) => {
  console.log(name, email, firebaseUid);
  const prismaEmployee = await prismaClient.employee.create({
    data: { name, email, firebaseUid, createdAt: new Date() },
  });
  return toEmployeeModel(prismaEmployee);
};
