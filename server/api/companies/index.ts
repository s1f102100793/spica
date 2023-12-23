import type { DefineMethods } from 'aspida';
import type { CompanyId } from 'commonTypesWithClient/ids';
import type { EmployeeCompanyPairModel } from 'commonTypesWithClient/models';

export type Methods = DefineMethods<{
  get: {
    query: { fields: string };
    resBody: EmployeeCompanyPairModel[] | CompanyId[] | null;
  };
}>;
