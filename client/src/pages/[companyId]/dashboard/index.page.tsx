import { useRouter } from 'next/router';
import { LeftSidebarSection } from 'src/components/CompanySection/LeftSidebarSection/LeftSidebarSection';
import { RighDashBoardtSection } from 'src/components/CompanySection/RightDashBoardSection/RightDashBoardSection';
import styles from '../index.module.css';

const DashBoard = () => {
  const router = useRouter();
  const { companyId } = router.query;

  console.log(companyId);
  return (
    <div className={styles.container}>
      <LeftSidebarSection />
      <RighDashBoardtSection />
    </div>
  );
};

export default DashBoard;
