import { LeftSidebarSection } from 'src/components/CompanySection/LeftSidebarSection/LeftSidebarSection';
import { RightQRcodeSection } from 'src/components/CompanySection/RightQRcodeSection/RightQRcodeSection';
import styles from '../index.module.css';

const Qrcode = () => {
  return (
    <div className={styles.container}>
      <LeftSidebarSection />
      <RightQRcodeSection />
    </div>
  );
};

export default Qrcode;
