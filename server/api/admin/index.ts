import type { DefineMethods } from 'aspida';
import type { UserId } from 'commonTypesWithClient/ids';

export type Methods = DefineMethods<{
  post: {
    reqBody: UserId;
    resBody: boolean;
  };
}>;
