import styles from '../../CompanySection/LeftSidebarSection/LeftSidebarSection.module.css';

export const LeftAdminSidebarSection = () => {
  const navigateTo = (path: string) => {
    window.location.href = path;
  };

  return (
    <div className={styles.container}>
      <div className={styles.spica}>Spica</div>
      <div className={styles.menu}>
        <div className={styles.menuTitle}>menu</div>
        <button className={styles.menuItem} onClick={() => navigateTo('/admin/companies/')}>
          企業追加
        </button>
        <button className={styles.menuItem} onClick={() => navigateTo('/admin/menbers/')}>
          管理者メンバー
        </button>
        <button className={styles.menuItem} onClick={() => navigateTo('/admin/news/')}>
          ニュース
        </button>
      </div>
    </div>
  );
};
