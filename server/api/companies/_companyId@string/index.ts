import type { DefineMethods } from 'aspida';
import type {
  CompanyDashboardModel,
  CompanyTipPageInfoModel,
  EmployeeTipPageInfoModel,
} from 'commonTypesWithClient/models';

export type Methods = DefineMethods<{
  get: {
    query: { fields: string };
    resBody: EmployeeTipPageInfoModel | CompanyTipPageInfoModel | CompanyDashboardModel | null;
  };
}>;
