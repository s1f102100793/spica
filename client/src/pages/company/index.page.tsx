import { LeftSidebarSection } from 'src/components/CompanySection/LeftSidebarSection/LeftSidebarSection';
import { RightSection } from 'src/components/CompanySection/RightSection/RightSection';
import styles from './index.module.css';

const Company = () => {
  return (
    <div className={styles.container}>
      <LeftSidebarSection />
      <RightSection />
    </div>
  );
};

export default Company;
