import type { DefineMethods } from 'aspida';
import type { EmployeeMyPageModel } from 'commonTypesWithClient/models';

export type Methods = DefineMethods<{
  get: {
    resBody: EmployeeMyPageModel;
  };
}>;
