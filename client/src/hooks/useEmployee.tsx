import type { EmployeeModel, EmployeeProfilePageModel } from 'commonTypesWithClient/models';
import { useAtom } from 'jotai';
import { useCallback, useState } from 'react';
import { userAtom } from 'src/atoms/user';
import { apiClient } from 'src/utils/apiClient';

export const useEmployee = () => {
  const [user] = useAtom(userAtom);
  const [employeeInformation, setEmployeeInformation] = useState<EmployeeModel | null>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const name = `${firstName} ${lastName}`;
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const getEmployeeInformation = useCallback(async () => {
    if (!user) return null;
    const employeeInformation = await apiClient.employees
      ._employeeId(user.id)
      .$get({ query: { fields: 'name,email,profile,EmployeeCompany' } });

    if (employeeInformation !== null) {
      const names = employeeInformation.name?.split(' ') as string[];
      setFirstName(names[0]);
      setLastName(names[1]);
      setEmail(employeeInformation.email as string);
      setProfileImage(employeeInformation.profileImage);
      setEmployeeInformation(employeeInformation as EmployeeModel);
    }

    return employeeInformation;
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
    await apiClient.employees
      ._employeeId(user.id)
      .$post({ body: { name, email, iconUrl: file } })
      .then(setEmployeeInformation);
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
    getEmployeeInformation,
    getEmployeeProfileInfo,
    updateEmployeeInformation,
  };
};
