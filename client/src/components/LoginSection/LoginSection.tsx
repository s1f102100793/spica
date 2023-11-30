import { useState } from 'react';
import { signInWithEmail } from 'src/utils/login';
import styles from './LoginSection.module.css';

export const LoginSection = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigateTo = (path: string) => {
    window.location.href = path;
  };

  const handleSubmit = async () => {
    try {
      await signInWithEmail(email, password);
      navigateTo('/mypage');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Spica</h1>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="email">メールアドレス</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">パスワード</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <button className={styles.loginbutton} onClick={handleSubmit}>
            ログイン
          </button>
        </div>
      </form>
    </div>
  );
};
