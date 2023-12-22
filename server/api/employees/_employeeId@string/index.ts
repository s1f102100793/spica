import type { DefineMethods } from 'aspida';
import type { EmployeeModel } from 'commonTypesWithClient/models';

export type Methods = DefineMethods<{
  get: {
    query: { fields: string };
    resBody: EmployeeModel;
  };
  post: {
    reqFormat: FormData;
    reqBody: { name: string; email: string; iconUrl: Blob | string };
    resBody: EmployeeModel;
  };
}>;
