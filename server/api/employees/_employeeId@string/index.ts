import type { DefineMethods } from 'aspida';
import type { EmployeeMyPageModel, EmployeeProfilePageModel } from 'commonTypesWithClient/models';

export type Methods = DefineMethods<{
  get: {
    query: { context: string };
    resBody: EmployeeProfilePageModel | EmployeeMyPageModel | null;
  };
  post: {
    reqFormat: FormData;
    reqBody: { name: string; email: string; iconUrl: Blob | string };
    resBody: EmployeeMyPageModel;
  };
}>;
