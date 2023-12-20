import { allCompanyUseCase } from '$/useCase/companyUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ query }) => ({
    status: 200,
    body: await allCompanyUseCase.get(query.fields),
  }),
}));
