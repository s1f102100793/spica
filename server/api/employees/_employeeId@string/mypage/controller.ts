import { employeeRepository } from '$/repository/employeeRepository';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ params: { employeeId } }) => ({
    status: 200,
    body: await employeeRepository.getMypageInfo(employeeId),
  }),
}));
