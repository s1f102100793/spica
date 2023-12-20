import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: { resBody: string };
  post: {
    reqBody: {
      companyId: string;
      employeeId: string | null;
      companyName: string;
      employeeName: string | null;
      amount: number;
      feedback: string;
    };
    resBody: string;
  };
}>;
