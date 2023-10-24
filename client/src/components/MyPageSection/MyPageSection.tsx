import { LeftSection } from './LeftSection.tsx/LeftSection';
import styles from './MySection.module.css';
import { RightSection } from './RightSection/RightSection';

export const MyPageSection = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <LeftSection />
        <RightSection />
      </form>
    </div>
  );
};
