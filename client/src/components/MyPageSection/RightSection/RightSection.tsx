import { useEffect, useState } from 'react';
import styles from './RightSection.module.css';

export const RightSection = () => {
  const [count, setCount] = useState(0);
  const totalAmount = 100;

  useEffect(() => {
    if (count < totalAmount) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 30);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [count]);

  const jobHistory = [
    { place: 'ガスト', duration: '12か月' },
    { place: 'マクドナルド', duration: '1か月' },
  ];

  return (
    <div className={styles.right}>
      <div className={styles.jobExperience}>
        <div className={styles.jobList}>
          <h2 className={styles.jobTitle}>バイト歴</h2>
          <div className={styles.jobHistoryList}>
            {jobHistory.map((job, index) => (
              <div className={styles.jobHistory} key={index}>
                ・{job.place} {job.duration}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.totalAmount}>
          <h2 className={styles.totalTile}>今まで稼いだ金額</h2>
          <div className={styles.totalAmountYen}>
            <span className={styles.smallText}>今まで稼いだ金額は</span>
            <span className={styles.largeText}>{count}万円</span>
          </div>
        </div>
      </div>
      <div className={styles.earningsBarChart} />
    </div>
  );
};
