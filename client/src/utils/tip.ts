type employeeTips = {
  amount: number;
  createdAt: Date;
};

export const calculateMonthlyTips = (tips: employeeTips[]): Record<string, number> => {
  const monthlyTips: Record<string, number> = {};

  tips.forEach((tip) => {
    const date = new Date(tip.createdAt);
    const monthYear = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    monthlyTips[monthYear] = (monthlyTips[monthYear] || 0) + tip.amount;
  });

  return monthlyTips;
};
