import type { EmployeeModel } from 'commonTypesWithClient/models';
import { useAtom } from 'jotai';
import { useCallback, useState } from 'react';
import { userAtom } from 'src/atoms/user';
import { apiClient } from 'src/utils/apiClient';
import { returnNull } from 'src/utils/returnNull';

export const useEmployee = () => {
  const [user] = useAtom(userAtom);
  const [employeeInformation, setEmployeeInformation] = useState<EmployeeModel | null>(null);

  const getEmployeeInformation = useCallback(async () => {
    if (!user) return;
    await apiClient.employees
      ._employeeId(user.id)
      .$post({})
      .catch(returnNull)
      .then(setEmployeeInformation);
  }, [user, setEmployeeInformation]);

  return { employeeInformation, getEmployeeInformation };
};
