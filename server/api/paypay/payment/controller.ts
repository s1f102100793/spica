import { createPayPayPayment } from '$/useCase/paypayUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: () => ({ status: 200, body: 'Hello' }),
  post: async ({ body }) => ({
    status: 201,
    body: await createPayPayPayment(body.amount, body.feedback),
  }),
}));
