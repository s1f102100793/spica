import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    resBody: string;
  };
  post: {
    reqBody: {
      email: string;
      code: string;
    };
    resBody: string;
  };
}>;
