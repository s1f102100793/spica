import type { CompanyDashboardModel } from 'commonTypesWithClient/models';
import { useCallback, useEffect, useState } from 'react';
import { useCalculateTip } from 'src/hooks/useCaluculateTip';
import { useRouteCompanyId } from 'src/hooks/useRouteCompanyId';
import { apiClient } from 'src/utils/apiClient';
import styles from './RightDashBoardSection.module.css';

export const RighDashBoardtSection = () => {
  const { companyId } = useRouteCompanyId();
  const [data, setData] = useState<CompanyDashboardModel | null>(null);
  const {
    monthlyTotal,
    averageTip,
    comparisonWithLastMonth,
    totalTips,
    monthlyRankings,
    monthlyFeedbacks,
  } = useCalculateTip(data);

  const getDashboardPagData = useCallback(async () => {
    if (companyId === undefined) return null;
    const dashboardData = (await apiClient.companies
      ._companyId(companyId as string)
      .$get({ query: { fields: 'dashboard' } })) as CompanyDashboardModel;
    setData(dashboardData);
  }, [companyId]);

  useEffect(() => {
    getDashboardPagData();
  }, [getDashboardPagData]);

  const leftColumnFeedbacks = monthlyFeedbacks.slice(0, 5);
  const rightColumnFeedbacks = monthlyFeedbacks.slice(5, 10);

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
                {monthlyRankings.map((ranking, index) => (
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
                  <li key={feedback?.id} className={styles.feedbackItem}>
                    {feedback?.content}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.feedbackColumn}>
              <ul>
                {rightColumnFeedbacks.map((feedback) => (
                  <li key={feedback?.id} className={styles.feedbackItem}>
                    {feedback?.content}
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
