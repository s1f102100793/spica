import { employeeRepository } from '$/repository/employeeRepository';
import { s3Repository } from '$/repository/s3Repository';

export const employeeUseCase = {
  save: async (firebaseUid: string, name: string, email: string, profileImage: Buffer | string) => {
    if (typeof profileImage !== 'string') {
      const keyName = 'profileImages';
      const IconURL = await s3Repository.uploadProfileImage(keyName, firebaseUid, profileImage);
      const result = await employeeRepository.save(firebaseUid, name, email, IconURL);
      return result;
    } else if (profileImage !== null) {
      const result = await employeeRepository.save(firebaseUid, name, email, profileImage);
      return result;
    } else {
      return null;
    }
  },
};
