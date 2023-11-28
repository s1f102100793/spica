import { useAtom } from 'jotai';
import Link from 'next/link'; // Linkをインポート
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { userAtom } from 'src/atoms/user';
import styles from './Header.module.css';

// eslint-disable-next-line complexity
export const Header = () => {
  const [user] = useAtom(userAtom);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

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
            <Link href="/login" className={styles.login}>
              ログイン
            </Link>
          )}
          {router.pathname !== '/signup' && user === null && (
            <Link href="/signup" className={styles.account}>
              アカウント開設
            </Link>
          )}
          {router.pathname !== '/mypage' && user !== null && (
            <Link href="/mypage" className={styles.account}>
              マイページ
            </Link>
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
      {isMenuOpen && (
        <div className={styles.menu}>
          <div className={styles.dropdown}>
            <Link href="#" className={styles.menuItem} onClick={() => setIsMenuOpen(false)}>
              ビジョン
            </Link>
            <Link href="#" className={styles.menuItem} onClick={() => setIsMenuOpen(false)}>
              ニュース
            </Link>
            <Link href="#" className={styles.menuItem} onClick={() => setIsMenuOpen(false)}>
              お問い合わせ
            </Link>
            {router.pathname !== '/login' && user === null && (
              <Link href="/login" className={styles.menuItem}>
                ログイン
              </Link>
            )}
            {router.pathname !== '/signup' && user === null && (
              <Link href="/signup" className={styles.menuItem}>
                アカウント開設
              </Link>
            )}
            {router.pathname !== '/mypage' && user !== null && (
              <Link href="/mypage" className={styles.menuItem}>
                マイページ
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};
