import { getCompanyInfo } from '$/repository/companyRepository';
import type { CompanyId } from 'commonTypesWithClient/ids';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ params, query }) => {
    const companyId = params.companyId as CompanyId;
    const fields = query.fields;

    const companyInfo = await getCompanyInfo(companyId, fields);
    return { status: 200, body: companyInfo };
  },
}));
