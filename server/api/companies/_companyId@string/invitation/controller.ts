import { companyUseCase } from '$/useCase/companyUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: () => ({ status: 200, body: 'Hello' }),
  post: async ({ params: { companyId }, body }) => ({
    status: 201,
    body: await companyUseCase.invite(companyId, body.email, body.name),
  }),
}));
