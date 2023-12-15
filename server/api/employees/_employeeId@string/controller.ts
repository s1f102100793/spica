import { getEmployee } from '$/repository/employeeRepository';
import { defineController } from './$relay';

export default defineController(() => ({
  get: () => ({ status: 200, body: 'Hello' }),
  post: async ({ params }) => ({ status: 201, body: await getEmployee(params.employeeId) }),
}));
