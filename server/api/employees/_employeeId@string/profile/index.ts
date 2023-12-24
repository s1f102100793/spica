import type { DefineMethods } from 'aspida';
import type { EmployeeProfilePageModel } from 'commonTypesWithClient/models';

export type Methods = DefineMethods<{
  get: {
    resBody: EmployeeProfilePageModel;
  };
}>;
