export type TrophyType = 'gold' | 'silver' | 'bronze';

const trophyOrder: TrophyType[] = ['gold', 'silver', 'bronze'];

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
  tips: { amount: number; createdAt: number }[]
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

  tips
    .sort((a, b) => a.createdAt - b.createdAt)
    // eslint-disable-next-line complexity
    .forEach((tip) => {
      totalAmount += tip.amount;
      totalTips++;
      highestSingleTip = Math.max(highestSingleTip, tip.amount);

      // Check for amount trophies
      if (!dateTracker.bronze['amount'] && totalAmount >= 10000)
        dateTracker.bronze['amount'] = new Date(tip.createdAt).toLocaleDateString();
      if (!dateTracker.silver['amount'] && totalAmount >= 30000)
        dateTracker.silver['amount'] = new Date(tip.createdAt).toLocaleDateString();
      if (!dateTracker.gold['amount'] && totalAmount >= 50000)
        dateTracker.gold['amount'] = new Date(tip.createdAt).toLocaleDateString();

      // Check for count trophies
      if (!dateTracker.bronze['count'] && totalTips >= 10)
        dateTracker.bronze['count'] = new Date(tip.createdAt).toLocaleDateString();
      if (!dateTracker.silver['count'] && totalTips >= 50)
        dateTracker.silver['count'] = new Date(tip.createdAt).toLocaleDateString();
      if (!dateTracker.gold['count'] && totalTips >= 100)
        dateTracker.gold['count'] = new Date(tip.createdAt).toLocaleDateString();

      // Check for single tip trophies
      if (!dateTracker.bronze['singleTip'] && highestSingleTip >= 1000)
        dateTracker.bronze['singleTip'] = new Date(tip.createdAt).toLocaleDateString();
      if (!dateTracker.silver['singleTip'] && highestSingleTip >= 3000)
        dateTracker.silver['singleTip'] = new Date(tip.createdAt).toLocaleDateString();
      if (!dateTracker.gold['singleTip'] && highestSingleTip >= 5000)
        dateTracker.gold['singleTip'] = new Date(tip.createdAt).toLocaleDateString();
    });

  trophyOrder.forEach((grade) => {
    ['amount', 'count', 'singleTip'].forEach((type) => {
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
