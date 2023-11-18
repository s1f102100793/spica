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
        <table className={styles.form}>
          <tbody>
            <tr>
              <td className={styles.formTitle} colSpan={2}>
                <div>基本情報</div>
                <EditIcon style={{ color: '#0070BA', cursor: 'pointer' }} />
              </td>
            </tr>
            <tr className={styles.formItem}>
              <td className={styles.formItemTitle}>氏名</td>
              <td className={styles.formItemContent}>{employeeInformation?.name}</td>
            </tr>
            <tr className={styles.formItem}>
              <td className={styles.formItemTitle}>メールアドレス</td>
              <td className={styles.formItemContent}>{employeeInformation?.email}</td>
            </tr>
            <tr className={styles.formItem}>
              <td className={styles.formItemTitle}>お客さんへ一言</td>
              <td className={styles.formItemContent}>bbbbbbbb</td>
            </tr>
            <tr className={styles.formItem}>
              <td className={styles.formItemTitle}>アイコン画像</td>
              <td className={styles.formItemContent}>
                <img
                  src={employeeInformation?.profileImage}
                  className={styles.profileImage}
                  alt="Profile"
                />
              </td>
            </tr>
          </tbody>
        </table>
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
