import type { DefineMethods } from 'aspida';
import type { CompanyModel } from 'commonTypesWithClient/models';

export type Methods = DefineMethods<{
  get: {
    query: { fields: string };
    resBody: Partial<CompanyModel>;
  };
}>;
