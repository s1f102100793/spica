import type { EmployeeModel } from 'commonTypesWithClient/models';
import { useAtom } from 'jotai';
import { useCallback, useState } from 'react';
import { userAtom } from 'src/atoms/user';
import { apiClient } from 'src/utils/apiClient';

export const useEmployee = () => {
  const [user] = useAtom(userAtom);
  const [employeeInformation, setEmployeeInformation] = useState<EmployeeModel | null>(null);

  const getEmployeeInformation = useCallback(async () => {
    if (!user) return;
    const employeeInfo = await apiClient.employees['$1'].$post({
      body: { firebaseUid: user.id },
    });
    if (employeeInfo !== null) {
      setEmployeeInformation(employeeInfo);
    }
  }, [user, setEmployeeInformation]);

  return { employeeInformation, getEmployeeInformation };
};
