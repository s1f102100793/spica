import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logoSection}>
          <div className={styles.logo}>Spica</div>
        </div>
        <div className={styles.navSection}>
          <div className={styles.navItem}>
            <div className={styles.navLabel}>サービスtoha</div>
            <a className={styles.subNavItem}>サービス1</a>
            <a className={styles.subNavItem}>サービス1</a>
            <a className={styles.subNavItem}>サービス1</a>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLabel}>サービスaaaaaaaaaaaaaa</div>
            <a className={styles.subNavItem}>サービス1</a>
            <a className={styles.subNavItem}>サービス1</a>
            <a className={styles.subNavItem}>サービス1</a>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLabel}>サービス</div>
            <a className={styles.subNavItem}>サービス1</a>
            <a className={styles.subNavItem}>サービスaaaaaaaaaaaaa1</a>
            <a className={styles.subNavItem}>サービス1</a>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLabel}>サービス</div>
            <a className={styles.subNavItem}>サービス1</a>
            <a className={styles.subNavItem}>サービスaaaaaaaaaaaaa1</a>
            <a className={styles.subNavItem}>サービス1</a>
          </div>
        </div>
      </div>
    </div>
  );
};
