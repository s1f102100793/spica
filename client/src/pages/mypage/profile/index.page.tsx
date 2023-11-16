import EditIcon from '@mui/icons-material/Edit';
import { useEffect } from 'react';
import { Footer } from 'src/components/Footer/Footer';
import { Header } from 'src/components/Header/Header';
import { useEmployee } from 'src/hooks/useEmployee';
import styles from './index.module.css';

const Profile = () => {
  const { employeeInformation, getEmployeeInformation } = useEmployee();

  const navigateTo = (path: string) => {
    window.location.href = path;
  };

  useEffect(() => {
    if (!employeeInformation) {
      getEmployeeInformation();
    }
  }, [employeeInformation, getEmployeeInformation]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.formTitle}>
            <div>基本情報</div>
            <EditIcon style={{ color: '#0070BA' }} />
          </div>
          <div className={styles.formContent}>
            <div className={styles.formItem}>
              <div className={styles.formItemTitle}>氏名</div>
              <div className={styles.formItemContent}>{employeeInformation?.name}</div>
            </div>
          </div>
          <div className={styles.formContent}>
            <div className={styles.formItem}>
              <div className={styles.formItemTitle}>メールアドレス</div>
              <div className={styles.formItemContent}>{employeeInformation?.email}</div>
            </div>
          </div>
          <div className={styles.formContent}>
            <div className={styles.formItem}>
              <div className={styles.formItemTitle}>お客さんへ一言</div>
              <div className={styles.formItemContent}>bbbbbbbb</div>
            </div>
          </div>
          <div className={styles.formContent}>
            <div className={styles.formItem}>
              <div className={styles.formItemTitle}>アイコン画像</div>
              <div className={styles.formItemContent}>
                <img
                  src={employeeInformation?.profileImage}
                  className={styles.profileImage}
                  alt="Profile"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={() => navigateTo('/mypage/')}>
            マイページに戻る
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
