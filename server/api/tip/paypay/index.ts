import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: { resBody: string };
  post: {
    reqBody: { companyName: string; employeeName: string | null; amount: number; feedback: string };
    resBody: string;
  };
}>;
