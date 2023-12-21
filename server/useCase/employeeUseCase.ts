import { employeeRepository } from '$/repository/employeeRepository';
import { s3Repository } from '$/repository/s3Repository';

export const employeeUseCase = {
  save: async (firebaseUid: string, name: string, email: string, profileImage: Buffer | string) => {
    if (typeof profileImage !== 'string') {
      const keyName = 'profileImages';
      const iconUrl = await s3Repository.upload(keyName, firebaseUid, profileImage);
      const result = await employeeRepository.save(firebaseUid, name, email, iconUrl);
      return result;
    } else {
      const result = await employeeRepository.save(firebaseUid, name, email, profileImage);
      return result;
    }
  },
};
