import { useState } from 'react';
import styles from './LeftSection.module.css';

type LeftSectionProps = {
  userProfileImage: string;
};

export const LeftSection: React.FC<LeftSectionProps> = ({ userProfileImage }) => {
  const [profileCompletion, setProfileCompletion] = useState(50);

  return (
    <div className={styles.left}>
      <div className={styles.icon}>
        <div className={styles.iconImage} style={{ backgroundImage: `url(${userProfileImage})` }} />
      </div>
      <div className={styles.userInfo}>
        <div className={styles.name}>aaa</div>
        <button className={styles.button}>プロフィールを編集</button>
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
