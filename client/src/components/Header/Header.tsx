import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';

// eslint-disable-next-line complexity
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const login = async () => {
    router.push('/login');
  };

  const crearteAccount = () => {
    router.push('/signup');
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 800) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>Spica</div>
        <div className={styles.right}>
          <span>ビジョン</span>
          <span>ニュース</span>
          <span>お問い合わせ</span>
          {router.pathname !== '/login' && router.pathname !== '/mypage' && (
            <span onClick={login}>ログイン</span>
          )}
          {router.pathname !== '/signup' && router.pathname !== '/mypage' && (
            <span className={styles.account} onClick={crearteAccount}>
              アカウント開設
            </span>
          )}
        </div>
        <div
          className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div />
          <div />
          <div />
        </div>
      </div>
      <div className={styles.menu}>
        {isMenuOpen && (
          <div className={styles.dropdown}>
            <span className={styles.menuItem} onClick={() => setIsMenuOpen(false)}>
              ビジョン
            </span>
            <span className={styles.menuItem} onClick={() => setIsMenuOpen(false)}>
              ニュース
            </span>
            <span className={styles.menuItem} onClick={() => setIsMenuOpen(false)}>
              お問い合わせ
            </span>
            {router.pathname !== '/login' && router.pathname !== '/mypage' && (
              <span className={styles.menuItem} onClick={login}>
                ログイン
              </span>
            )}
            {router.pathname !== '/signup' && router.pathname !== '/mypage' && (
              <span className={styles.menuItem} onClick={crearteAccount}>
                アカウント開設
              </span>
            )}
          </div>
        )}
      </div>
    </>
  );
};
