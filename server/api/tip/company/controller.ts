import { allCompanyIds, postCompanyInfo } from '$/repository/companyRepository';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async () => ({ status: 200, body: await allCompanyIds() }),
  post: async ({ body }) => ({ status: 201, body: await postCompanyInfo(body.companyId) }),
}));
