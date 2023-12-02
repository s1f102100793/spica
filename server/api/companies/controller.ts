import { allCompanyIds, getCompanyInfo } from '$/repository/companyRepository';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ query: { companyId } }) => {
    if (companyId !== undefined) {
      const companyInfo = await getCompanyInfo(companyId);
      return { status: 200, body: companyInfo };
    } else {
      const companyIds = await allCompanyIds();
      return { status: 200, body: companyIds };
    }
  },
}));
