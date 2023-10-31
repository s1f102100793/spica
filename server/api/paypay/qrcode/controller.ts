import { generateQRCode, paypay } from '$/useCase/paypayUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async () => ({ status: 200, body: await paypay() }),
  post: async () => ({ status: 201, body: await generateQRCode() }),
  // post: async ({ body }) => ({
  //   status: 201,
  //   body: await generateAppInvokeQRCode(body.user, body.amount),
  // }),
}));
