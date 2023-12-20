import { getAllCompanyInfo } from '$/repository/companyRepository';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ query }) => ({
    status: 200,
    body: await getAllCompanyInfo(query.fields),
  }),
}));
