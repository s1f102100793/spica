import React from 'react';
import styles from './LatestNews.module.css';

export const LatestNews: React.FC = () => {
  const newsItems = [
    {
      date: '2023/10/05',
      category: 'プレスリリース',
      title: '[back check] が次世代の法人カード「アウトラベンジャーカード」 [緊急情報]',
    },
    {
      date: '2023/07/10',
      category: 'プレスリリース',
      title: '厚生労働省後援 日本の人事部 [HRアワード2023] 最終審査において入賞',
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
