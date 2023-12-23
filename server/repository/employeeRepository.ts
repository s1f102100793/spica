import type { EmployeeMypageModel, EmployeeProfilePageModel } from '$/commonTypesWithClient/models';
import { companyIdParser } from '$/service/idParsers';
import { prismaClient } from '$/service/prismaClient';
import type { Tip } from '@prisma/client';

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

const toEmployeeMypageModel = (prismaEmployeeMyPage: {
  name: string;
  profile: {
    profileImage: string;
  };
  EmployeeCompany: {
    company: {
      name: string;
    };
    companyId: string;
    roleId: number;
  }[];
  Tip: Tip[];
}): EmployeeMypageModel => ({
  name: prismaEmployeeMyPage.name,
  profileImage: prismaEmployeeMyPage.profile.profileImage,
  employeeCompany: prismaEmployeeMyPage.EmployeeCompany.map((ec) => ({
    companyId: companyIdParser.parse(ec.companyId),
    companyName: ec.company.name,
    roleId: ec.roleId,
  })),
  tips: prismaEmployeeMyPage.Tip.map((tip) => ({
    id: tip.id,
    companyId: companyIdParser.parse(tip.companyId),
    amount: tip.amount,
    createdAt: tip.createdAt.getTime(),
  })),
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
        profile: { select: { profileImage: true } },
        EmployeeCompany: { include: { company: { select: { name: true } } } },
        Tip: true,
      },
    });
    const profile = prismaEmployee.profile || { profileImage: '/images/default.png' };

    return toEmployeeMypageModel({
      ...prismaEmployee,
      profile,
    });
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
  getMypageInfo: async (firebaseUid: string) => {
    const prismaEmployeeMyPage = await prismaClient.employee.findUnique({
      where: { firebaseUid },
      select: {
        name: true,
        profile: {
          select: {
            profileImage: true,
          },
        },
        EmployeeCompany: {
          select: {
            company: {
              select: {
                name: true,
              },
            },
            companyId: true,
            roleId: true,
          },
        },
        Tip: true,
      },
    });
    if (!prismaEmployeeMyPage) {
      throw new Error('Employee not found');
    }
    const profile = prismaEmployeeMyPage.profile || { profileImage: '/images/default.png' };
    return toEmployeeMypageModel({
      ...prismaEmployeeMyPage,
      profile,
    });
  },
};
