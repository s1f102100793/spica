import { useRouteCompanyId } from 'src/hooks/useRouteCompanyId';
import styles from './LeftSidebarSection.module.css';

export const LeftSidebarSection = () => {
  const { navigateTo } = useRouteCompanyId();
  return (
    <div className={styles.container}>
      <div className={styles.spica}>Spica</div>
      <div className={styles.menu}>
        <div className={styles.menuTitle}>menu</div>
        <div className={styles.menuItem} onClick={() => navigateTo('/dashboard/')}>
          ダッシュボード
        </div>
        <div className={styles.menuItem} onClick={() => navigateTo('/members/')}>
          メンバー
        </div>
        <div className={styles.menuItem} onClick={() => navigateTo('/qrcode/')}>
          QRコード
        </div>
      </div>
    </div>
  );
};
