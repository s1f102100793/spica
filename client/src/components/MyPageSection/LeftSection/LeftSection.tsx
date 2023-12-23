import type { EmployeeMypageModel } from 'commonTypesWithClient/models';
import { useEffect, useState } from 'react';
import styles from './LeftSection.module.css';

type LeftSectionProps = {
  employeeInformation: EmployeeMypageModel | null;
};

export const LeftSection: React.FC<LeftSectionProps> = ({ employeeInformation }) => {
  const profileCompletion = 50;
  const [companyRoleList, setCompanyRoleList] = useState<
    { companyId: string; roleId: number; companyName: string }[]
  >([]);

  const isRelevantRole = (roleId: number) => {
    const employeeRoleId = 1;
    const partTimeButHaveEmployeeRoleId = 2;

    return roleId === employeeRoleId || roleId === partTimeButHaveEmployeeRoleId;
  };

  useEffect(() => {
    if (employeeInformation !== null) {
      const extractedData = employeeInformation.employeeCompany.map((company) => ({
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
          .filter((company) => isRelevantRole(company.roleId))
          .map((company, index) => (
            <a key={index} href={`/${company.companyId}/dashboard`} className={styles.button}>
              {company.companyName}ページへ
            </a>
          ))}
      </div>
    </div>
  );
};
