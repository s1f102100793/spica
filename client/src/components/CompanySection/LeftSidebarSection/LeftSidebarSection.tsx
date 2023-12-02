import { useRouteCompanyId } from 'src/hooks/useRouteCompanyId';
import styles from './LeftSidebarSection.module.css';

export const LeftSidebarSection = () => {
  const { navigateTo } = useRouteCompanyId();
  return (
    <div className={styles.container}>
      <div className={styles.spica}>Spica</div>
      <div className={styles.menu}>
        <div className={styles.menuTitle}>menu</div>
        <button className={styles.menuItem} onClick={() => navigateTo('/dashboard/')}>
          ダッシュボード
        </button>
        <button className={styles.menuItem} onClick={() => navigateTo('/members/')}>
          メンバー
        </button>
        <button className={styles.menuItem} onClick={() => navigateTo('/qrcode/')}>
          QRコード
        </button>
      </div>
    </div>
  );
};
