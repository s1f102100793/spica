import type { EmployeeModel } from 'commonTypesWithClient/models';
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    resBody: string;
  };
  post: {
    reqBody: { firebaseUid: string };
    resBody: EmployeeModel | null;
  };
}>;
