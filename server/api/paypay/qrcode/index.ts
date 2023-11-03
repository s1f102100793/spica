import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: { resBody: string };
  post: {
    reqBody: { company_id: string; user_id: string; amount: number; feedback: string };
    resBody: string;
  };
}>;
