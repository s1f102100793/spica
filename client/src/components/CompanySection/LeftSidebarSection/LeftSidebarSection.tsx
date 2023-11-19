import styles from './LeftSidebarSection.module.css';

export const LeftSidebarSection = () => {
  const navigateTo = (path: string) => {
    window.location.href = path;
  };

  return (
    <div className={styles.container}>
      <div className={styles.spica}>Spica</div>
      <div className={styles.menu}>
        <div className={styles.menuTitle}>menu</div>
        <button className={styles.menuItem} onClick={() => navigateTo('/company/dashboard/')}>
          ダッシュボード
        </button>
        <button className={styles.menuItem} onClick={() => navigateTo('/company/members/')}>
          メンバー
        </button>
        <button className={styles.menuItem} onClick={() => navigateTo('/company/qrcode/')}>
          QRコード
        </button>
      </div>
    </div>
  );
};
