import { generateQRCode } from '$/useCase/paypayUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: () => ({ status: 200, body: 'Hello' }),
  post: async ({ body }) => ({
    status: 201,
    body: await generateQRCode(body.companyId, body.userId, body.amount, body.feedback),
  }),
}));
