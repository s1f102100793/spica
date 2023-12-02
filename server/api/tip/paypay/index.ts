import type { DefineMethods } from 'aspida';
import type { CompanyId, UserId } from 'commonTypesWithClient/ids';

export type Methods = DefineMethods<{
  get: { resBody: string };
  post: {
    reqBody: { companyId: CompanyId; userId: UserId | null; amount: number; feedback: string };
    resBody: string;
  };
}>;
