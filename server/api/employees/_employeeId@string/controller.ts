import { getEmployee } from '$/repository/employeeRepository';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ params: { employeeId }, query: { fields } }) => ({
    status: 200,
    body: await getEmployee(employeeId, fields),
  }),
}));
