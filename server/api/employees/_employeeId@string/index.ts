import type { DefineMethods } from 'aspida';
import type { EmployeeModel, EmployeeProfilePageModel } from 'commonTypesWithClient/models';

export type Methods = DefineMethods<{
  get: {
    query: { fields: string };
    resBody: EmployeeProfilePageModel | null;
  };
  post: {
    reqFormat: FormData;
    reqBody: { name: string; email: string; iconUrl: Blob | string };
    resBody: EmployeeModel;
  };
}>;
