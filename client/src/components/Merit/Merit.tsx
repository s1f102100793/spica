import React from 'react';
import styles from './Merit.module.css';

export const Merit = () => {
  const merits = [
    {
      name: '時給アップ',
      imageUrl: '/home/WageIncrease.png',
      description: [
        'プロフィールを設定することで、前職の経験を次のアルバイトに活かし、時給アップを実現できます。',
      ],
    },
    {
      name: '信頼性の向上',
      imageUrl: '/home/ReliabilityIncrease.png',
      description: [
        '過去の仕事の経験を具体的に示すことで、新しい職場での信頼性と立場をより迅速に確立できます。',
      ],
    },
    {
      name: '自己評価の洞察',
      imageUrl: '/home/Visualization.png',
      description: [
        '前職の同僚からの評価を通じて、自分の長所や短所を客観的に知ることができ、より自分を磨き上げるための手助けとなります。',
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <h1>Spicaで得られるメリット</h1>
      <div className={styles.merits}>
        {merits.map((merit, index) => (
          <div key={index} className={styles.meritItem}>
            <h2>{merit.name}</h2>
            <img src={merit.imageUrl} alt={merit.imageUrl} />
            <h3>
              {merit.description.map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  {idx !== merit.description.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};
