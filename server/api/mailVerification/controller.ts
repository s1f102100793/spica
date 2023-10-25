import { sendVerificationEmail } from '$/useCase/mailUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: () => ({ status: 200, body: 'Hello' }),
  post: async ({ body }) => ({
    status: 201,
    body: await sendVerificationEmail(body.email, body.code),
  }),
}));
