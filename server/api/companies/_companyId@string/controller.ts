import { companyUseCase } from '$/useCase/companyUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ params: { companyId }, query: { fields } }) => ({
    status: 200,
    body: await companyUseCase.get(companyId, fields),
  }),
}));
