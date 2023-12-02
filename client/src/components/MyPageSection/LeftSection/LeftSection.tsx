import type { EmployeeModel } from 'commonTypesWithClient/models';
import styles from './LeftSection.module.css';

type LeftSectionProps = {
  employeeInformation: EmployeeModel | null;
};

export const LeftSection: React.FC<LeftSectionProps> = ({ employeeInformation }) => {
  const profileCompletion = 50;

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
      </div>
    </div>
  );
};
