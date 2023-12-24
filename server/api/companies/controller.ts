import { allCompanyUseCase } from '$/useCase/companyUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ query: { fields } }) => {
    const result = await allCompanyUseCase.get(fields);

    if (result instanceof Error) {
      switch (result.message) {
        case 'Invalid fields parameter':
          return { status: 400, body: { error: result.message } };
        default:
          return { status: 500, body: { error: 'Internal Server Error' } };
      }
    }

    return {
      status: 200,
      body: result,
    };
  },
}));
