import type { EmployeeModel } from 'commonTypesWithClient/models';
import { useAtom } from 'jotai';
import { useCallback, useState } from 'react';
import { userAtom } from 'src/atoms/user';
import { apiClient } from 'src/utils/apiClient';
import { returnNull } from 'src/utils/returnNull';

export const useEmployee = () => {
  const [user] = useAtom(userAtom);
  const [employeeInformation, setEmployeeInformation] = useState<EmployeeModel | null>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState('');

  const getEmployeeInformation = useCallback(async () => {
    if (!user) return null;
    const employeeInformation = await apiClient.employees
      ._employeeId(user.id)
      .$post({})
      .catch(returnNull);

    if (employeeInformation) {
      const names = employeeInformation.name.split(' ');
      setFirstName(names[0]);
      setLastName(names[1] || '');
      setEmail(employeeInformation.email);
      setProfileImage(employeeInformation.profileImage);
      setEmployeeInformation(employeeInformation);
    }

    return employeeInformation;
  }, [user]);

  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    profileImage,
    setProfileImage,
    employeeInformation,
    getEmployeeInformation,
  };
};
