import { CompanyNotFoundError, InvalidFieldsError } from '$/commonTypesWithClient/errors';
import { companyUseCase } from '$/useCase/companyUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ params: { companyId }, query: { fields } }) => {
    try {
      const result = await companyUseCase.get(companyId, fields);
      return {
        status: 200,
        body: result,
      };
    } catch (err) {
      if (err instanceof CompanyNotFoundError) {
        throw { status: 404, body: { error: err.message } };
      } else if (err instanceof InvalidFieldsError) {
        throw { status: 400, body: { error: err.message } };
      } else {
        throw { status: 500, body: { error: 'Internal Server Error' } };
      }
    }
  },
}));
