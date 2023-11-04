import { useRouter } from 'next/router';
import styles from './LeftSidebarSection.module.css';

export const LeftSidebarSection = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className={styles.container}>
      <div className={styles.spica}>Spica</div>
      <div className={styles.menu}>
        <div className={styles.menuTitle}>menu</div>
        <div className={styles.menuItem} onClick={() => navigateTo('/company/dashboard/')}>
          ダッシュボード
        </div>
        <div className={styles.menuItem} onClick={() => navigateTo('/company/members/')}>
          メンバー
        </div>
      </div>
    </div>
  );
};
