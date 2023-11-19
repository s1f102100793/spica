import { checkAdmin } from '$/repository/adminRepository';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ body }) => ({ status: 201, body: await checkAdmin(body) }),
}));
