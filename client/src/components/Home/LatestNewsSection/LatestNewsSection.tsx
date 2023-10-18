import React from 'react';
import styles from './LatestNews.module.css';

export const LatestNewsSection: React.FC = () => {
  const newsItems = [
    {
      date: '2023/10/15',
      category: 'プレスリリース',
      title: '作成開始しました',
    },
    {
      date: '2023/10/18',
      category: 'プレスリリース',
      title: 'お知らせ欄が作成されました',
    },
    {
      date: '2023/10/15',
      category: 'プレスリリース',
      title: '作成開始しました',
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>お知らせ</h1>
      <div className={styles.news}>
        {newsItems.map((item, index) => (
          <div key={index} className={styles.newsItem}>
            <div className={styles.newsDate}>{item.date}</div>
            <div className={styles.newsCategory}>{item.category}</div>
            <div className={styles.newsTitle}>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
