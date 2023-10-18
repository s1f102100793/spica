import styles from './HeroSection.module.css';

export const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroText}>
          <h1>
            今までの経験を
            <br />
            時給に変換
          </h1>
          <p>
            Spicaはあなたの経歴と評価で、次のアルバイト現場でもっと輝かせる。あなたの価値を最大限に引き出すためのプラットフォームです。
          </p>
        </div>
      </div>
    </div>
  );
};
