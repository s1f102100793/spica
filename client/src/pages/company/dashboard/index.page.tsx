import { LeftSidebarSection } from 'src/components/CompanySection/LeftSidebarSection/LeftSidebarSection';
import { RighDashBoardtSection } from 'src/components/CompanySection/RightDashBoardSection/RightDashBoardSection';
import styles from '../index.module.css';

const DashBoars = () => {
  return (
    <div className={styles.container}>
      <LeftSidebarSection />
      <RighDashBoardtSection />
    </div>
  );
};

export default DashBoars;
