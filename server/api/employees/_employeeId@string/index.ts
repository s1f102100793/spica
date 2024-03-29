import type { DefineMethods } from 'aspida';
import type { EmployeeMyPageModel } from 'commonTypesWithClient/models';

export type Methods = DefineMethods<{
  post: {
    reqFormat: FormData;
    reqBody: { name: string; email: string; iconUrl: Blob | string };
    resBody: EmployeeMyPageModel;
  };
}>;
