import Link from 'next/link';
import styles from './HeroSection.module.css';

export const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroText}>
          <h1>
            スピカで
            <br />
            未来の時給体系を実現
          </h1>
          <Link href="/signup" className={styles.account}>
            アカウント開設
          </Link>
        </div>
      </div>
    </div>
  );
};
