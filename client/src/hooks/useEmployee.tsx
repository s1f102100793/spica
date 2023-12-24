import type { EmployeeMyPageModel, EmployeeProfilePageModel } from 'commonTypesWithClient/models';
import { useAtom } from 'jotai';
import { useCallback, useState } from 'react';
import { userAtom } from 'src/atoms/user';
import { apiClient } from 'src/utils/apiClient';

export const useEmployee = () => {
  const [user] = useAtom(userAtom);
  const [employeeInformation, setEmployeeInformation] = useState<EmployeeMyPageModel | null>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const name = `${firstName} ${lastName}`;
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const getEmployeeMyPageInfo = useCallback(async () => {
    if (!user) return null;
    const employeeInformation = (await apiClient.employees
      ._employeeId(user.id)
      .$get({ query: { fields: 'mypage' } })) as EmployeeMyPageModel;

    const names = employeeInformation.name?.split(' ');
    setFirstName(names[0]);
    setLastName(names[1]);
    setProfileImage(employeeInformation.profileImage);
    setEmployeeInformation(employeeInformation);
  }, [user]);

  const getEmployeeProfileInfo = useCallback(async () => {
    if (!user) return null;
    const employeeInformation = (await apiClient.employees
      ._employeeId(user.id)
      .$get({ query: { fields: 'profile' } })) as EmployeeProfilePageModel;

    const names = employeeInformation.name?.split(' ') as string[];
    setFirstName(names[0]);
    setLastName(names[1]);
    setEmail(employeeInformation.email);
    setProfileImage(employeeInformation.profileImage);
  }, [user]);

  const updateEmployeeInformation = async () => {
    if (!user) return null;
    if (!file) return null;
    const employeeInformation = (await apiClient.employees
      ._employeeId(user.id)
      .$post({ body: { name, email, iconUrl: file } })
      .then(setEmployeeInformation)) as EmployeeMyPageModel;

    const names = employeeInformation.name?.split(' ');
    setFirstName(names[0]);
    setLastName(names[1]);
    setProfileImage(employeeInformation.profileImage);
  };

  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    profileImage,
    setProfileImage,
    setFile,
    employeeInformation,
    getEmployeeMyPageInfo,
    getEmployeeProfileInfo,
    updateEmployeeInformation,
  };
};
