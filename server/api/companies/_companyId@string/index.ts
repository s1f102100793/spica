import type { DefineMethods } from 'aspida';
import type {
  CompanyTipPageInfoModel,
  EmployeeTipPageInfoModel,
} from 'commonTypesWithClient/models';

export type Methods = DefineMethods<{
  get: {
    query: { fields: string };
    resBody: EmployeeTipPageInfoModel | CompanyTipPageInfoModel | null;
  };
}>;
