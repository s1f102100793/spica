import type { DefineMethods } from 'aspida';
import type { CompanyId } from 'commonTypesWithClient/ids';

export type Methods = DefineMethods<{
  get: {
    query: { companyId: CompanyId | undefined };
    resBody: CompanyId[] | { id: CompanyId; name: string };
  };
}>;
