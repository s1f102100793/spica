import { defineHooks } from './$relay';

export default defineHooks(() => ({
  preHandler: (req, reply, done) => {
    console.log(req.body);
    done();
  },
}));
