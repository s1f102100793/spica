import { employeeRepository } from '$/repository/employeeRepository';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ params: { employeeId }, query: { fields } }) => ({
    status: 200,
    body: await employeeRepository.get(employeeId, fields),
  }),
  post: async ({ params: { employeeId }, body }) => ({
    status: 200,
    body: await employeeRepository.save(employeeId, body.name, body.email, body.IconURL),
  }),
}));
