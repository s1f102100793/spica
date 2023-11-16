import type { EmployeeModel } from 'commonTypesWithClient/models';
import { useState } from 'react';
import styles from './LeftSection.module.css';

type LeftSectionProps = {
  employeeInformation: EmployeeModel | null;
};

export const LeftSection: React.FC<LeftSectionProps> = ({ employeeInformation }) => {
  const [profileCompletion, setProfileCompletion] = useState(50);
  const navigateTo = (path: string) => {
    window.location.href = path;
  };

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
        <button className={styles.button} onClick={() => navigateTo('/mypage/profile/')}>
          プロフィールを編集
        </button>
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
      </div>
    </div>
  );
};
