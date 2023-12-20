import { getCompanyInfo } from '$/repository/companyRepository';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ params: { companyId }, query: { fields } }) => ({
    status: 200,
    body: await getCompanyInfo(companyId, fields),
  }),
}));
