import type { CompanyDashboardModel } from 'commonTypesWithClient/models';
import { useMemo } from 'react';

const isSameMonthAndYear = (date: number, month: number, year: number) => {
  const tipDate = new Date(date);
  return tipDate.getMonth() === month && tipDate.getFullYear() === year;
};

export const useCalculateTip = (dashboardData: CompanyDashboardModel | null) => {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const monthlyTotal = useMemo(() => {
    if (!dashboardData) return 0;

    return dashboardData.tips
      .filter((tip) => isSameMonthAndYear(tip.createdAt, currentMonth, currentYear))
      .reduce((sum, tip) => sum + tip.amount, 0);
  }, [dashboardData, currentMonth, currentYear]);

  const averageTip = useMemo(() => {
    if (!dashboardData) return 0;

    const tipsThisMonth = dashboardData.tips.filter((tip) =>
      isSameMonthAndYear(tip.createdAt, currentMonth, currentYear)
    );

    if (tipsThisMonth.length === 0) return 0;

    const totalAmountThisMonth = tipsThisMonth.reduce((sum, tip) => sum + tip.amount, 0);
    return totalAmountThisMonth / tipsThisMonth.length;
  }, [dashboardData, currentMonth, currentYear]);

  const comparisonWithLastMonth = useMemo(() => {
    if (!dashboardData) return 0;

    let lastMonth = currentMonth - 1;
    let lastYear = currentYear;
    if (lastMonth < 0) {
      lastMonth = 11;
      lastYear -= 1;
    }
    const lastMonthTotal = dashboardData.tips
      .filter((tip) => isSameMonthAndYear(tip.createdAt, lastMonth, lastYear))
      .reduce((sum, tip) => sum + tip.amount, 0);
    const currentMonthTotal = dashboardData.tips
      .filter((tip) => isSameMonthAndYear(tip.createdAt, currentMonth, currentYear))
      .reduce((sum, tip) => sum + tip.amount, 0);

    return lastMonthTotal === 0 ? 0 : (currentMonthTotal / lastMonthTotal) * 100;
  }, [dashboardData, currentMonth, currentYear]);

  const totalTips = useMemo(() => {
    if (!dashboardData) return 0;

    return dashboardData.tips.reduce((sum, tip) => sum + tip.amount, 0);
  }, [dashboardData]);

  const monthlyRankings = useMemo(() => {
    if (!dashboardData) return [];

    const tipsThisMonth = dashboardData.tips
      .filter((tip) => isSameMonthAndYear(tip.createdAt, currentMonth, currentYear))
      .reduce((acc: { [key: string]: { userName: string; amount: number } }, tip) => {
        const employeeId = tip.employeeId;
        acc[employeeId] = { userName: tip.employeeName, amount: 0 };
        acc[employeeId].amount += tip.amount;
        return acc;
      }, {});

    return Object.values(tipsThisMonth).sort((a, b) => {
      if (typeof a.amount === 'number' && typeof b.amount === 'number') {
        return b.amount - a.amount;
      }
      return 0;
    });
  }, [dashboardData, currentMonth, currentYear]);

  const monthlyFeedbacks = useMemo(() => {
    if (!dashboardData) return [];

    const sortedFeedbacks = dashboardData.tips
      .filter((tip) => isSameMonthAndYear(tip.createdAt, currentMonth, currentYear))
      .sort((a, b) => b.createdAt - a.createdAt)
      .map((tip, index) => {
        const feedbackContent = tip.feedback.trim();
        if (feedbackContent) {
          return { id: index + 1, content: feedbackContent };
        } else {
          return null;
        }
      })
      .filter((feedback) => feedback !== null);

    return sortedFeedbacks;
  }, [dashboardData, currentMonth, currentYear]);

  const membersList = useMemo(() => {
    if (!dashboardData) return [];

    const members = dashboardData.EmployeeCompany.map((employee) => ({
      name: employee.employeeName,
      monthlyTipCount: 0,
      averageMonthlyTip: 0,
      monthlyTipAmount: 0,
      totalTipAmount: 0,
    }));

    dashboardData.tips.forEach((tip) => {
      const member = members.find((member) => member.name === tip.employeeName);
      if (member) {
        member.monthlyTipCount += 1;
        member.monthlyTipAmount += tip.amount;
        member.totalTipAmount += tip.amount;
      }
    });

    members.forEach((member) => {
      if (member.monthlyTipCount > 0) {
        member.averageMonthlyTip = member.monthlyTipAmount / member.monthlyTipCount;
      }
    });

    return members;
  }, [dashboardData]);

  const memberIdList = useMemo(() => {
    if (!dashboardData) return [];

    return dashboardData.EmployeeCompany.map((employee) => ({
      name: employee.employeeName,
      employeeId: employee.employeeId,
    }));
  }, [dashboardData]);

  return {
    monthlyTotal,
    averageTip,
    comparisonWithLastMonth,
    totalTips,
    monthlyRankings,
    monthlyFeedbacks,
    membersList,
    memberIdList,
  };
};
