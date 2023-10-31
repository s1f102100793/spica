import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: { resBody: string };
  // post: { reqBody: { user: string; amount: number }; resBody: string };
  post: { resBody: string };
}>;
