import { InvalidFieldsError } from '$/commonTypesWithClient/errors';
import { allCompanyUseCase } from '$/useCase/companyUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ query: { fields } }) => {
    try {
      const result = await allCompanyUseCase.get(fields);
      return {
        status: 200,
        body: result,
      };
    } catch (err) {
      if (err instanceof InvalidFieldsError) {
        return { status: 400, body: { error: err.message } };
      } else {
        return { status: 500, body: { error: 'Internal Server Error' } };
      }
    }
  },
}));
