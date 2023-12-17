import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    query: { fields: string };
    resBody: any;
  };
}>;
