import styles from './LeftSidebarSection.module.css';

export const LeftSidebarSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spica}>Spica</div>
      <div className={styles.menu}>
        <div className={styles.menuTitle}>menu</div>
        <div className={styles.menuItem}>ダッシュボード</div>
        <div className={styles.menuItem}>メンバー</div>
      </div>
    </div>
  );
};
