import type { CompanyDashboardModel } from 'commonTypesWithClient/models';
import { useCallback, useEffect, useState } from 'react';
import { useRouteCompanyId } from 'src/hooks/useRouteCompanyId';
import { apiClient } from 'src/utils/apiClient';
import styles from './RightDashBoardSection.module.css';

export const RighDashBoardtSection = () => {
  const { companyId } = useRouteCompanyId();

  const [monthlyTotal, setMonthlyTotal] = useState(0);
  const [averageTip, setAverageTip] = useState(0);
  const [comparisonWithLastMonth, setComparisonWithLastMonth] = useState(0);
  const [totalTips, setTotalTips] = useState(0);

  const getDashboardPagData = useCallback(async () => {
    if (companyId === undefined) return null;
    const dashboardData = (await apiClient.companies
      ._companyId(companyId as string)
      .$get({ query: { fields: 'dashboard' } })) as CompanyDashboardModel;
  }, [companyId]);

  useEffect(() => {
    getDashboardPagData();
  }, [getDashboardPagData]);

  const tipRankings = [
    { userName: 'ユーザー1', amount: '500' },
    { userName: 'ユーザー2', amount: '450' },
    { userName: 'ユーザー3', amount: '400' },
    { userName: 'ユーザー4', amount: '350' },
    { userName: 'ユーザー5', amount: '300' },
  ];

  const feedbacks = [
    { id: 1, content: '素晴らしいサービスでした！' },
    { id: 2, content: 'とても親切に対応していただきました。' },
    { id: 3, content: 'また来ます！' },
    { id: 4, content: 'ありがとうございました。' },
    { id: 5, content: 'また来ます！' },
    { id: 6, content: 'ありがとうございました。' },
    { id: 7, content: 'また来ます！' },
    { id: 8, content: 'ありがとうございました。' },
    { id: 9, content: 'また来ます！' },
    { id: 10, content: '10番目のフィードバック。' },
    { id: 11, content: '表示されないフィードバック。' },
  ];
  const leftColumnFeedbacks = feedbacks.slice(0, 5);
  const rightColumnFeedbacks = feedbacks.slice(5, 10);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.companyName}>test_company</div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.pickup}>
          <div className={styles.pickupTitle}>pickup</div>
          <div className={styles.pickupContent}>
            <div className={styles.pickupItem}>
              <div className={styles.itemTitle}>今月のチップ金額</div>
              <div className={styles.itemContent}>¥ {monthlyTotal}</div>
            </div>
            <div className={styles.pickupItem}>
              <div className={styles.itemTitle}>平均チップ金額</div>
              <div className={styles.itemContent}>¥ {averageTip}</div>
            </div>
            <div className={styles.pickupItem}>
              <div className={styles.itemTitle}>先月チップとの比較</div>
              <div className={styles.itemContent}>{comparisonWithLastMonth} %</div>
            </div>
            <div className={styles.pickupItem}>
              <div className={styles.itemTitle}>累計チップ額</div>
              <div className={styles.itemContent}>¥ {totalTips}</div>
            </div>
          </div>
        </div>
        <div className={styles.middleArea}>
          <div className={styles.graph}>
            <div className={styles.graphTitle}>チップ推移</div>
            <div className={styles.graphContent} />
          </div>
          <div className={styles.tipRanking}>
            <div className={styles.tipRankingTitle}>チップランキング</div>
            <div className={styles.tipRankingContent}>
              <ul>
                {tipRankings.map((ranking, index) => (
                  <li key={index} className={styles.rankingItem}>
                    {index + 1}. {ranking.userName}: {ranking.amount}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.feedbackArea}>
          <div className={styles.feedbackTitle}>フィードバック</div>
          <div className={styles.feedbackContent}>
            <div className={styles.feedbackColumn}>
              <ul>
                {leftColumnFeedbacks.map((feedback) => (
                  <li key={feedback.id} className={styles.feedbackItem}>
                    {feedback.content}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.feedbackColumn}>
              <ul>
                {rightColumnFeedbacks.map((feedback) => (
                  <li key={feedback.id} className={styles.feedbackItem}>
                    {feedback.content}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
