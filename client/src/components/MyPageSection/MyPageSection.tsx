import { LeftSection } from './LeftSection.tsx/LeftSection';
import styles from './MySection.module.css';
import { RightSection } from './RightSection/RightSection';

export const MyPageSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
};
