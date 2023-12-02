import type { DefineMethods } from 'aspida';
import type { CompanyId } from 'commonTypesWithClient/ids';

export type Methods = DefineMethods<{
  get: {
    resBody: CompanyId[];
  };
  post: {
    reqBody: {
      companyId: CompanyId;
    };
    resBody: {
      id: string;
      name: string;
    };
  };
}>;
