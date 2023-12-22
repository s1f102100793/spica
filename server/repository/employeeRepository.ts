import type { EmployeeModel, EmployeeProfilePageModel } from '$/commonTypesWithClient/models';
import { companyIdParser, userIdParser } from '$/service/idParsers';
import { prismaClient } from '$/service/prismaClient';
import type { Company, Employee, EmployeeCompany, EmployeeProfile, Tip } from '@prisma/client';

const toEmployeeModel = (
  prismaEmployee: Employee & {
    profile?: EmployeeProfile | null;
    EmployeeCompany?: (EmployeeCompany & { company?: Partial<Company> })[];
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
          profileImage: prismaEmployee.profile.profileImage,
          createdAt: prismaEmployee.profile.createdAt.getTime(),
          updatedAt: prismaEmployee.profile.updatedAt.getTime(),
        }
      : undefined,
    employeeCompanies: prismaEmployee.EmployeeCompany?.map((ec) => ({
      id: ec.id,
      companyId: companyIdParser.parse(ec.companyId),
      roleId: ec.roleId,
      companyName: ec.company?.name,
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

const toEmployeeProfilePageModel = (prismaEmployeeProfile: {
  name: string;
  email: string;
  profile: {
    profileImage: string;
  };
}): EmployeeProfilePageModel => ({
  name: prismaEmployeeProfile.name,
  email: prismaEmployeeProfile.email,
  profileImage: prismaEmployeeProfile.profile.profileImage,
});

export const employeeRepository = {
  save: async (firebaseUid: string, name: string, email: string, profileImage: string) => {
    const prismaEmployee = await prismaClient.employee.upsert({
      where: { firebaseUid },
      create: {
        firebaseUid,
        name,
        email,
        profile: { create: { profileImage } },
      },
      update: {
        name,
        email,
        profile: { update: { profileImage } },
      },
      include: {
        profile: true,
        EmployeeCompany: { include: { company: { select: { name: true } } } },
        Tip: true,
      },
    });
    return toEmployeeModel(prismaEmployee);
  },
  get: async (firebaseUid: string, fields: string) => {
    const selectFields = createSelectFields(fields);
    const prismaEmployee = await prismaClient.employee.findUnique({
      where: { firebaseUid },
      select: selectFields,
    });
    if (!prismaEmployee) {
      throw new Error('Employee not found');
    }
    return toEmployeeModel(prismaEmployee);
  },
  getProfileInfo: async (firebaseUid: string) => {
    const prismaEmployeeProfile = await prismaClient.employee.findUnique({
      where: { firebaseUid },
      select: {
        name: true,
        email: true,
        profile: {
          select: {
            profileImage: true,
          },
        },
      },
    });
    if (!prismaEmployeeProfile) {
      throw new Error('Employee not found');
    }
    const profile = prismaEmployeeProfile.profile || { profileImage: '/images/default.png' };

    return toEmployeeProfilePageModel({
      ...prismaEmployeeProfile,
      profile,
    });
  },
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
