export type TrophyType = 'gold' | 'silver' | 'bronze';

const trophyOrder: TrophyType[] = ['bronze', 'silver', 'gold'];

export const trophyImages: Record<TrophyType, string> = {
  gold: '/images/trophy/gold_trophy.png',
  silver: '/images/trophy/silver_trophy.png',
  bronze: '/images/trophy/bronze_trophy.png',
};
export type TrophyAchievement = {
  type: string;
  grade: TrophyType;
  date: string;
};

export const analyzeTrophies = (
  tips: { amount: number; createdAt: Date }[]
): TrophyAchievement[] => {
  let totalAmount = 0;
  let totalTips = 0;
  let highestSingleTip = 0;
  const trophyAchievements: TrophyAchievement[] = [];
  const dateTracker: Record<TrophyType, Record<string, string>> = {
    gold: {},
    silver: {},
    bronze: {},
  };

  const trophyThresholds = {
    amount: [10000, 30000, 50000],
    count: [10, 50, 100],
    singleTip: [1000, 3000, 5000],
  };

  const updateTrophy = (
    type: 'amount' | 'count' | 'singleTip',
    value: number,
    date: Date,
    thresholds: number[]
  ) => {
    trophyOrder.forEach((grade, index) => {
      if (!dateTracker[grade][type] && value >= thresholds[index]) {
        dateTracker[grade][type] = new Date(date).toLocaleDateString();
      }
    });
  };

  tips
    .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())
    .forEach((tip) => {
      totalAmount += tip.amount;
      totalTips++;
      highestSingleTip = Math.max(highestSingleTip, tip.amount);

      updateTrophy('amount', totalAmount, tip.createdAt, trophyThresholds.amount);
      updateTrophy('count', totalTips, tip.createdAt, trophyThresholds.count);
      updateTrophy('singleTip', highestSingleTip, tip.createdAt, trophyThresholds.singleTip);
    });

  trophyOrder.forEach((grade) => {
    Object.keys(trophyThresholds).forEach((type) => {
      if (dateTracker[grade][type]) {
        trophyAchievements.push({
          type: type === 'amount' ? '累計金額' : type === 'count' ? 'チップ回数' : '最高チップ金額',
          grade,
          date: dateTracker[grade][type],
        });
      }
    });
  });

  return trophyAchievements;
};
