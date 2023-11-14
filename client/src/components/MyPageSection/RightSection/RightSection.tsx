import { BarController, BarElement, CategoryScale, Chart, LinearScale } from 'chart.js';
import { useRouter } from 'next/router';
import QRCode from 'qrcode';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import styles from './RightSection.module.css';

Chart.register(CategoryScale, LinearScale, BarElement, BarController);

export const RightSection = () => {
  const user_id = 'test_user';
  const company_id = 'test_company';
  const [count, setCount] = useState(0);
  const totalAmount = 100;
  const [qrCodeUrl, setQRCodeUrl] = useState<string | null>(null);
  const router = useRouter();

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

  const badges = [
    {
      icon: '/images/trophy/gold_trophy.png',
      description: '獲得アルゴリズム200',
      date: '2023-10-19',
    },
    {
      icon: '/images/trophy/gold_trophy.png',
      description: '獲得アルゴリズム100',
      date: '2023-09-07',
    },
    {
      icon: '/images/trophy/bronze_trophy.png',
      description: '獲得アルゴリズム200',
      date: '2023-10-19',
    },
    {
      icon: '/images/trophy/silber_trophy.png',
      description: '獲得アルゴリズム100',
      date: '2023-09-07',
    },
    {
      icon: '/images/trophy/gold_trophy.png',
      description: '獲得アルゴリズム100',
      date: '2023-09-07',
    },
  ];

  const navigateToTipPage = () => {
    router.push(`/tip/${company_id}/${user_id}`);
  };

  const generateQRCode = async () => {
    const urlToEncode = `/tip/${company_id}/${user_id}`;
    try {
      const response = await QRCode.toDataURL(urlToEncode);
      setQRCodeUrl(response);
    } catch (err) {
      console.error(err);
      return null;
    }
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
      <div className={styles.badgeSection}>
        <h3 className={styles.badgeTitle}>
          <div className={styles.badgeTitleName}>獲得したバッジ</div>
          {badges.length >= 5 && <span className={styles.viewAll}>すべて見る＞</span>}
        </h3>
        <div className={styles.badgeContainer}>
          {badges.slice(0, 5).map((badge, index) => (
            <div className={styles.badgeItem} key={index}>
              <img src={badge.icon} alt={badge.description} className={styles.badgeIcon} />
              <p className={styles.badgeDescription}>{badge.description}</p>
              <span className={styles.badgeDate}>{badge.date}</span>
            </div>
          ))}
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

      <div className={styles.qrcodeSection}>
        <h3 className={styles.qrcodeTitle}>QRコードを表示</h3>
        <div className={styles.qrcodeContainer}>
          <button className={styles.qrcodeButton} onClick={navigateToTipPage}>
            PayPay支払いページにとぶ
          </button>
          <button className={styles.qrcodeButton} onClick={generateQRCode}>
            QRコード作成
          </button>
          {qrCodeUrl !== null && <img className={styles.qrcode} src={qrCodeUrl} />}
        </div>
      </div>
    </div>
  );
};