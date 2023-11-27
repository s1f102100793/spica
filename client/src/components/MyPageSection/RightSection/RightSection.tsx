import type { ChartData } from 'chart.js';
import { BarController, BarElement, CategoryScale, Chart, LinearScale } from 'chart.js';
import type { EmployeeModel } from 'commonTypesWithClient/models';
import { useRouter } from 'next/router';
import QRCode from 'qrcode';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { calculateMonthlyTips } from 'src/utils/tip';
import type { TrophyAchievement } from 'src/utils/trophy';
import { analyzeTrophies, trophyImages } from 'src/utils/trophy';
import styles from './RightSection.module.css';

Chart.register(CategoryScale, LinearScale, BarElement, BarController);

type RightSectionProps = {
  employeeInformation: EmployeeModel | null;
};

export const RightSection: React.FC<RightSectionProps> = ({ employeeInformation }) => {
  const router = useRouter();
  const user_id = 'test_user';
  const company_id = 'test_company';
  const [qrCodeUrl, setQRCodeUrl] = useState<string | null>(null);
  const [totalEarned, setTotalEarned] = useState(0);
  const [monthlyTipData, setMonthlyTipData] = useState<ChartData<'bar'>>({
    labels: [],
    datasets: [],
  });

  const [trophyList, setTrophyList] = useState<TrophyAchievement[]>([]);

  useEffect(() => {
    if (employeeInformation && employeeInformation.tips !== null) {
      const total = employeeInformation.tips.reduce((sum, tip) => sum + tip.amount, 0);
      setTotalEarned(total);
      const analyzedTrophies = analyzeTrophies(employeeInformation.tips);
      setTrophyList(analyzedTrophies);
      const monthlyTips = calculateMonthlyTips(employeeInformation.tips);
      setMonthlyTipData({
        labels: Object.keys(monthlyTips),
        datasets: [
          {
            label: '月別チップ金額',
            data: Object.values(monthlyTips),
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            barThickness: 24,
          },
        ],
      });
    }
  }, [employeeInformation]);

  const renderTrophies = () => {
    const reversedTrophies = [...trophyList].reverse().slice(0, 5);

    return reversedTrophies.map((trophy, index) => (
      <div key={index} className={styles.badgeItem}>
        <img
          src={trophyImages[trophy.grade]}
          alt={`${trophy.grade} trophy`}
          className={styles.badgeIcon}
        />
        <p className={styles.badgeDescription}>
          {trophy.type} {trophy.grade.toUpperCase()} 達成
        </p>
        <p className={styles.badgeDate}>達成日: {trophy.date}</p>
      </div>
    ));
  };

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
          <h3 className={styles.jobTitle}>仕事先</h3>
          <div className={styles.jobHistoryList}>
            {employeeInformation?.employeeCompanies.map((ec, index) => (
              <div className={styles.jobHistory} key={index}>
                ・{ec.companyName}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.totalAmount}>
          <h3 className={styles.totalTitle}>今まで稼いだ金額</h3>
          <div className={styles.totalAmountYen}>
            <span className={styles.smallText}>今まで稼いだ金額は</span>
            <span className={styles.largeText}>{totalEarned}円</span>
          </div>
        </div>
      </div>
      <div className={styles.badgeSection}>
        <h3 className={styles.badgeTitle}>
          <div className={styles.badgeTitleName}>獲得したトロフィー</div>
          {trophyList.length >= 5 && <span className={styles.viewAll}>すべて見る＞</span>}
        </h3>
        <div className={styles.badgeContainer}>{renderTrophies()}</div>
      </div>

      <div className={styles.earningsBarChart}>
        <h3 className={styles.barTitle}>月別チップ金額</h3>
        <Bar
          className={styles.barChart}
          data={monthlyTipData}
          options={{
            scales: {
              y: { beginAtZero: true },
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
