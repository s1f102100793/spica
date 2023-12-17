import type { EmployeeModel } from '$/commonTypesWithClient/models';
import { companyIdParser, userIdParser } from '$/service/idParsers';
import { prismaClient } from '$/service/prismaClient';
import type { Employee, EmployeeCompany, EmployeeProfile, Tip } from '@prisma/client';

const toEmployeeModel = (
  prismaEmployee: Employee & {
    profile?: EmployeeProfile | null;
    EmployeeCompany?: (EmployeeCompany & { company: { name: string } })[];
    Tip: Tip[];
  }
): EmployeeModel => {
  return {
    firebaseUid:
      prismaEmployee?.firebaseUid !== null && prismaEmployee?.firebaseUid !== undefined
        ? userIdParser.parse(prismaEmployee.firebaseUid)
        : undefined,
    name: prismaEmployee?.name,
    email: prismaEmployee?.email,
    createdAt: prismaEmployee.createdAt?.getTime(),
    isDeleted: prismaEmployee?.isDeleted,
    profile: prismaEmployee?.profile
      ? {
          id: prismaEmployee.profile.profileId,
          employeeId: userIdParser.parse(prismaEmployee.profile.employeeId),
          profileImage: prismaEmployee.profile.profileImage,
          createdAt: prismaEmployee.profile.createdAt.getTime(),
          updatedAt: prismaEmployee.profile.updatedAt.getTime(),
        }
      : undefined,
    employeeCompanies: prismaEmployee.EmployeeCompany?.map((ec) => ({
      id: ec.id,
      companyId: companyIdParser.parse(ec.companyId),
      roleId: ec.roleId,
      companyName: ec.company.name,
    })),
    tips: prismaEmployee.Tip?.map((tip) => ({
      id: tip.id,
      employeeId: userIdParser.parse(tip.employeeId),
      companyId: companyIdParser.parse(tip.companyId),
      amount: tip.amount,
      createdAt: tip.createdAt.getTime(),
    })),
  };
};

export const getEmployee = async (firebaseUid: string, fields: string) => {
  try {
    const selectFields = createSelectFields(fields);

    const prismaEmployee = await prismaClient.employee.findUnique({
      where: { firebaseUid },
      select: selectFields,
    });

    if (!prismaEmployee) {
      throw new Error('Employee not found');
    }

    return toEmployeeModel(prismaEmployee);
  } catch (e) {
    console.log(e);
  }
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
      include: {
        profile: true,
        EmployeeCompany: { include: { company: { select: { name: true } } } },
        Tip: true,
      },
    });
    return toEmployeeModel(prismaEmployee);
  } catch (e) {
    console.log(e);
  }
};

const createSelectFields = (fields: string) => {
  const selectFields: Record<
    string,
    boolean | { select: Record<string, boolean | { select: Record<string, boolean> }> }
  > = {};
  const fieldsArray = fields.split(',');

  if (fieldsArray.includes('*')) {
    if (fieldsArray.length > 1) {
      throw new Error("Invalid fields: '*' cannot be combined with other fields");
    }
    return {
      firebaseUid: true,
      name: true,
      email: true,
      createdAt: true,
      isDeleted: true,
      profile: createSelectFieldForProfile(),
      EmployeeCompany: createSelectFieldForEmployeeCompany(),
      Tip: true,
    };
  }

  fieldsArray.forEach((field) => {
    if (field === 'profile') {
      selectFields[field] = createSelectFieldForProfile();
    } else if (field === 'EmployeeCompany') {
      selectFields[field] = createSelectFieldForEmployeeCompany();
    } else {
      selectFields[field] = true;
    }
  });

  return selectFields;
};

const createSelectFieldForProfile = () => ({
  select: {
    profileId: true,
    profileImage: true,
    createdAt: true,
    updatedAt: true,
  },
});

const createSelectFieldForEmployeeCompany = () => ({
  select: {
    id: true,
    companyId: true,
    roleId: true,
    company: {
      select: {
        name: true,
      },
    },
  },
});
