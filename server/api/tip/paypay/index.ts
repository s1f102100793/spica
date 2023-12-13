import type { DefineMethods } from 'aspida';
import type { CompanyId, UserId } from 'commonTypesWithClient/ids';

export type Methods = DefineMethods<{
  get: { resBody: string };
  post: {
    reqBody: {
      companyId: CompanyId;
      employeeId: UserId | null;
      companyName: string;
      employeeName: string | null;
      amount: number;
      feedback: string;
    };
    resBody: string;
  };
}>;
