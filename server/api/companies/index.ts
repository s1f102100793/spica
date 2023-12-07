import type { DefineMethods } from 'aspida';
import type { CompanyResponseModel } from 'commonTypesWithClient/models';

export type Methods = DefineMethods<{
  get: {
    query: { fields: string };
    resBody: CompanyResponseModel[];
  };
}>;
