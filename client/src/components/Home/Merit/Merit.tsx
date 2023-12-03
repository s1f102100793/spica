import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './Merit.module.css';

export const MeritSection = () => {
  const merits = [
    {
      name: '時給アップ',
      imageUrl: '/home/WageIncrease.png',
      description: [
        'スピカを導入することで、従業員が直接お客様からチップを受け取ることが可能になります。これにより、従業員の実質的な収入が増加ます。',
      ],
    },
    {
      name: 'サービスの向上',
      imageUrl: '/home/ReliabilityIncrease.png',
      description: [
        'チップを受け取る際に、フィードバックを受け取り、フィードバック情報を分析して、共有することでサービス向上に繋がります',
      ],
    },
    {
      name: '人材の定着率向上',
      imageUrl: '/home/WageIncrease.png',
      description: [
        'スピカを通じて得られるチップは、従業員の給与に直接加算されるため、従業員の満足度が高まります。結果として、働く環境への満足から人材の定着率が向上し、長期的なチーム構築に貢献します。',
      ],
    },
    {
      name: 'お客さんの常連化',
      imageUrl: '/home/ReliabilityIncrease.png',
      description: [
        'チップを受け取る際に、お客さんとのコミュニケーションを取ることで、お客さんとの距離が縮まり、常連化に繋がります。',
      ],
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 700);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1>スピカで得られるメリット</h1>
      <div className={styles.merits}>
        {merits.map((merit, index) => (
          <div key={index} className={styles.meritItem}>
            {isMobile || index % 2 === 0 ? (
              // モバイル表示または偶数インデックスの場合
              <>
                <div className={styles.meritDescription}>
                  <div className={styles.meritTitle}>
                    <div className={styles.meritTitleIcon}>MERIT</div>
                    <h2>{merit.name}</h2>
                  </div>
                  <h3>
                    {merit.description.map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        {idx !== merit.description.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>
                </div>
                <img src={merit.imageUrl} alt={merit.name} />
              </>
            ) : (
              // PC表示の奇数インデックスの場合
              <>
                <img src={merit.imageUrl} alt={merit.name} />
                <div className={styles.meritDescription}>
                  <div className={styles.meritTitle}>
                    <div className={styles.meritTitleIcon}>MERIT</div>
                    <h2>{merit.name}</h2>
                  </div>
                  <h3>
                    {merit.description.map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        {idx !== merit.description.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <Link href="/signup" className={styles.account}>
        アカウント開設
      </Link>
    </div>
  );
};
