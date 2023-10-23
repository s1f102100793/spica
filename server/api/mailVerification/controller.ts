import { defineController } from './$relay';

export default defineController(() => ({
  get: () => ({ status: 200, body: 'Hello' }),
  post: ( {body}) => ({ status: 201, body: 'Hello' }),
}));
