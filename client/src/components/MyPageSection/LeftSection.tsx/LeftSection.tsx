import { useState } from 'react';
import styles from './LeftSection.module.css';

export const LeftSection = () => {
  const [profileCompletion, setProfileCompletion] = useState(50);

  return (
    <div className={styles.left}>
      <div className={styles.icon}>
        <div className={styles.iconImage} />
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
