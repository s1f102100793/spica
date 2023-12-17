import type { DefineMethods } from 'aspida';
import type { EmployeeModel } from 'commonTypesWithClient/models';

export type Methods = DefineMethods<{
  get: {
    query: { fields: string };
    resBody: EmployeeModel;
  };
  post: {
    reqBody: { name: string; email: string; defaultIconURL: string };
    resBody: EmployeeModel;
  };
}>;
