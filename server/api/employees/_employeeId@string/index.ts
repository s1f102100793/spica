import type { DefineMethods } from 'aspida';
import type { EmployeeModel } from 'commonTypesWithClient/models';

export type Methods = DefineMethods<{
  get: {
    resBody: string;
  };
  post: {
    resBody: EmployeeModel | null;
  };
}>;
