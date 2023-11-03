import { generateQRCode } from '$/useCase/paypayUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: () => ({ status: 200, body: 'Hello' }),
  post: async ({ body }) => ({
    status: 201,
    body: await generateQRCode(body.company_id, body.user_id, body.amount, body.feedback),
  }),
}));
