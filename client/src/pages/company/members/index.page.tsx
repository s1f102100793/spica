import { LeftSidebarSection } from 'src/components/CompanySection/LeftSidebarSection/LeftSidebarSection';
import { RightMembersSection } from 'src/components/CompanySection/RightMembersSection/RightMembersSection';
import styles from '../index.module.css';

const Members = () => {
  return (
    <div className={styles.container}>
      <LeftSidebarSection />
      <RightMembersSection />
    </div>
  );
};

export default Members;
