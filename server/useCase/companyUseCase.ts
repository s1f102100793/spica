import { allCompanyRepository, companyRepository } from '$/repository/companyRepository';

export const companyUseCase = {
  get: async (companyId: string, fields: string) => {
    switch (fields) {
      case 'id,name':
        return companyRepository.getCompanyTipPageInfo(companyId);
      case 'id,name,EmployeeCompany':
        return companyRepository.getEmployeeTipPageInfo(companyId);
      default:
        return new Error('Invalid fields parameter');
    }
  },
};

export const allCompanyUseCase = {
  get: async (fields: string) => {
    switch (fields) {
      case 'id':
        return allCompanyRepository.getCompanyId();
      case 'EmployeeCompany':
        return allCompanyRepository.getEmployeeCompany();
      default:
        return new Error('Invalid fields parameter');
    }
  },
};
