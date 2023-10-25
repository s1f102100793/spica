import { BarController, BarElement, CategoryScale, Chart, LinearScale } from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import styles from './RightSection.module.css';

Chart.register(CategoryScale, LinearScale, BarElement, BarController);

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

  const salaries = [
    { month: '1月', amount: 10 },
    { month: '2月', amount: 12 },
    { month: '1月', amount: 10 },
    { month: '2月', amount: 12 },
    { month: '1月', amount: 10 },
    { month: '2月', amount: 12 },
    { month: '1月', amount: 10 },
    { month: '2月', amount: 12 },
    { month: '1月', amount: 10 },
    { month: '2月', amount: 12 },
    { month: '1月', amount: 10 },
    { month: '2月', amount: 12 },
  ];

  const salaryData = {
    labels: salaries.map((s) => s.month),
    datasets: [
      {
        label: '給料',
        data: salaries.map((s) => s.amount),
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={styles.right}>
      <div className={styles.jobExperience}>
        <div className={styles.jobList}>
          <h3 className={styles.jobTitle}>バイト歴</h3>
          <div className={styles.jobHistoryList}>
            {jobHistory.map((job, index) => (
              <div className={styles.jobHistory} key={index}>
                ・{job.place} {job.duration}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.totalAmount}>
          <h3 className={styles.totalTitle}>今まで稼いだ金額</h3>
          <div className={styles.totalAmountYen}>
            <span className={styles.smallText}>今まで稼いだ金額は</span>
            <span className={styles.largeText}>{count}万円</span>
          </div>
        </div>
      </div>
      <div className={styles.earningsBarChart}>
        <h3 className={styles.barTitle}>月別金額</h3>
        <Bar
          className={styles.barChart}
          data={salaryData}
          options={{
            scales: {
              y: { beginAtZero: true, title: { display: true } },
              x: { title: { display: true } },
            },
          }}
        />
      </div>
    </div>
  );
};
