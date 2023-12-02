import { createEmployee } from '$/repository/employeeRepository';
import { defineController } from './$relay';

export default defineController(() => ({
  get: () => ({ status: 200, body: 'Hello' }),
  post: async ({ body }) => ({
    status: 201,
    body: await createEmployee(body.name, body.email, body.firebaseUid),
  }),
}));
