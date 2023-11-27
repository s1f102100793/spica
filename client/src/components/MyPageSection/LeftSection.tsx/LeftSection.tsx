import type { EmployeeModel } from 'commonTypesWithClient/models';
import { useEffect, useState } from 'react';
import styles from './LeftSection.module.css';

type LeftSectionProps = {
  employeeInformation: EmployeeModel | null;
};

export const LeftSection: React.FC<LeftSectionProps> = ({ employeeInformation }) => {
  const profileCompletion = 50;
  const [companyRoleList, setCompanyRoleList] = useState<
    { companyId: number; roleId: number; companyName: string }[]
  >([]);

  useEffect(() => {
    if (employeeInformation && employeeInformation.employeeCompanies !== null) {
      const extractedData = employeeInformation.employeeCompanies.map((company) => ({
        companyId: company.companyId,
        roleId: company.roleId,
        companyName: company.companyName,
      }));
      setCompanyRoleList(extractedData);
    }
  }, [employeeInformation]);

  return (
    <div className={styles.left}>
      <div className={styles.icon}>
        <div
          className={styles.iconImage}
          style={{ backgroundImage: `url(${employeeInformation?.profileImage})` }}
        />
      </div>
      <div className={styles.userInfo}>
        <div className={styles.name}>{employeeInformation?.name}</div>
        <a href="/mypage/profile/" className={styles.button}>
          プロフィールを編集
        </a>
        <div className={styles.profileCompletion}>
          <div className={styles.profileCompletionLabel}>
            プロフィール入力率: {profileCompletion}% 完了
          </div>
          <div className={styles.profileCompletionBar}>
            <div
              className={styles.profileCompletionBarFill}
              style={{ width: `${profileCompletion}%` }}
            />
          </div>
        </div>
        {companyRoleList
          .filter((company) => company.roleId === 1 || company.roleId === 2)
          .map((company, index) => (
            <a key={index} href={`/${company.companyId}/dashboard`} className={styles.button}>
              {company.companyName}ページへ
            </a>
          ))}
      </div>
    </div>
  );
};
