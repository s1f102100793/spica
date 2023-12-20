import Link from 'next/link';
import styles from './PossibleSection.module.css';

export const PossibleSection = () => {
  const possibles = [
    {
      name: '従業員のパフォーマンス追跡',
      imageUrl: '/home/ExperienceandSkillVerification.png',
    },
    {
      name: '個別のチップ受領履歴の把握',
      imageUrl: '/home/Feedback.png',
    },
    {
      name: '顧客からの直接フィードバック',
      imageUrl: '/home/Feedback.png',
    },
    {
      name: 'フィードバック分析',
      imageUrl: '/home/ExploreNewOptimalWorkplaces.png',
    },
  ];

  return (
    <div className={styles.container}>
      <h1>スピカでできること</h1>
      <div className={styles.possibles}>
        {possibles.map((possible, index) => (
          <div key={index} className={styles.possibleItem}>
            <img src={possible.imageUrl} alt={possible.name} />
            <h2>{possible.name}</h2>
          </div>
        ))}
      </div>
      <Link href="/signup" className={styles.account}>
        アカウント開設
      </Link>
    </div>
  );
};
