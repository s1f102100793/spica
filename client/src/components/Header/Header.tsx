import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { userAtom } from 'src/atoms/user';
import styles from './Header.module.css';

// eslint-disable-next-line complexity
export const Header = () => {
  const [user] = useAtom(userAtom);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const navigate = (path: string) => {
    router.push(path);
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
          {router.pathname !== '/login' && user === null && (
            <span onClick={() => navigate('/login')}>ログイン</span>
          )}
          {router.pathname !== '/signup' && user === null && (
            <button className={styles.account} onClick={() => navigate('/signup')}>
              アカウント開設
            </button>
          )}
          {router.pathname !== '/mypage' && user !== null && (
            <button className={styles.account} onClick={() => navigate('/mypage')}>
              マイページ
            </button>
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
            {router.pathname !== '/login' && user === null && (
              <span className={styles.menuItem} onClick={() => navigate('/login')}>
                ログイン
              </span>
            )}
            {router.pathname !== '/signup' && user === null && (
              <span className={styles.menuItem} onClick={() => navigate('/signup')}>
                アカウント開設
              </span>
            )}
            {router.pathname !== '/mypage' && user !== null && (
              <span className={styles.menuItem} onClick={() => navigate('/mypage')}>
                マイページ
              </span>
            )}
          </div>
        )}
      </div>
    </>
  );
};
