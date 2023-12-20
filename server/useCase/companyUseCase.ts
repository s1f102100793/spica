import { allCompanyRepository } from '$/repository/companyRepository';

export const companyUseCase = {};

export const allCompanyUseCase = {
  get: async (fields: string) => {
    switch (fields) {
      case 'id':
        return allCompanyRepository.getCompanyId();
      case 'EmployeeCompany':
        return allCompanyRepository.getEmployeeCompany();
      default:
        return null;
    }
  },
};
