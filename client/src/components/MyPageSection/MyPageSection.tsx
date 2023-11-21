import { useEffect } from 'react';
import { useEmployee } from 'src/hooks/useEmployee';
import { LeftSection } from './LeftSection.tsx/LeftSection';
import styles from './MySection.module.css';
import { RightSection } from './RightSection/RightSection';

export const MyPageSection = () => {
  const { employeeInformation, getEmployeeInformation } = useEmployee();

  useEffect(() => {
    if (!employeeInformation) {
      getEmployeeInformation();
    }
  }, [employeeInformation, getEmployeeInformation]);

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <LeftSection employeeInformation={employeeInformation} />
        <RightSection />
      </div>
    </div>
  );
};
