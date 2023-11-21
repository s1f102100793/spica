import styles from './LeftSidebarSection.module.css';

export const LeftSidebarSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spica}>Spica</div>
      <div className={styles.menu}>
        <div className={styles.menuTitle}>menu</div>
        <a href="/company/dashboard/" className={styles.menuItem}>
          ダッシュボード
        </a>
        <a href="/company/members/" className={styles.menuItem}>
          メンバー
        </a>
        <a href="/company/qrcode/" className={styles.menuItem}>
          QRコード
        </a>
      </div>
    </div>
  );
};
