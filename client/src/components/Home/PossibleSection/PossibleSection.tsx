import styles from './PossibleSection.module.css';

export const PossibleSection = () => {
  const possibles = [
    {
      name: '経験、スキルの確認',
      imageUrl: '/home/ExperienceandSkillVerification.png',
    },
    {
      name: '同僚からのフィードバック',
      imageUrl: '/home/Feedback.png',
    },
    {
      name: 'マッチする職場の確認',
      imageUrl: '/home/MatchaTheWorkplace.png',
    },
    {
      name: '最適な職場を新たに探索',
      imageUrl: '/home/ExploreNewOptimalWorkplaces.png',
    },
  ];

  return (
    <div className={styles.container}>
      <h1>Spicaでできること</h1>
      <div className={styles.possibles}>
        {possibles.map((possible, index) => (
          <div key={index} className={styles.possibleItem}>
            <img src={possible.imageUrl} alt={possible.name} />
            <h2>{possible.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
