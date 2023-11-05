import { Autocomplete, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import styles from './RightMembersSection.module.css';

type Member = {
  name: string;
  monthlyTipCount: number;
  averageMonthlyTip: number;
  monthlyTipAmount: number;
  totalTipAmount: number;
};

type SortType = 'monthlyTipCount' | 'averageMonthlyTip' | 'monthlyTipAmount' | 'totalTipAmount';

export const RightMembersSection = () => {
  const [members, setMembers] = useState([
    {
      name: '山田 太郎',
      monthlyTipCount: 5,
      averageMonthlyTip: 300,
      monthlyTipAmount: 1500,
      totalTipAmount: 8000,
    },
    {
      name: '佐藤 花子',
      monthlyTipCount: 8,
      averageMonthlyTip: 250,
      monthlyTipAmount: 2000,
      totalTipAmount: 12000,
    },
    {
      name: '鈴木 一郎',
      monthlyTipCount: 3,
      averageMonthlyTip: 500,
      monthlyTipAmount: 1500,
      totalTipAmount: 4500,
    },
    {
      name: '高橋 次郎',
      monthlyTipCount: 7,
      averageMonthlyTip: 350,
      monthlyTipAmount: 2450,
      totalTipAmount: 9800,
    },
    {
      name: '田中 美咲',
      monthlyTipCount: 6,
      averageMonthlyTip: 400,
      monthlyTipAmount: 2400,
      totalTipAmount: 14400,
    },
    {
      name: '伊藤 浩',
      monthlyTipCount: 4,
      averageMonthlyTip: 450,
      monthlyTipAmount: 1800,
      totalTipAmount: 7200,
    },
    {
      name: '渡辺 京子',
      monthlyTipCount: 9,
      averageMonthlyTip: 350,
      monthlyTipAmount: 3150,
      totalTipAmount: 12600,
    },
    {
      name: '小林 大輔',
      monthlyTipCount: 2,
      averageMonthlyTip: 600,
      monthlyTipAmount: 1200,
      totalTipAmount: 2400,
    },
    {
      name: '加藤 あゆみ',
      monthlyTipCount: 10,
      averageMonthlyTip: 200,
      monthlyTipAmount: 2000,
      totalTipAmount: 20000,
    },
    {
      name: '吉田 良平',
      monthlyTipCount: 1,
      averageMonthlyTip: 1000,
      monthlyTipAmount: 1000,
      totalTipAmount: 1000,
    },
  ]);

  const [sortType, setSortType] = useState<SortType>('monthlyTipAmount');

  useEffect(() => {
    const sortedMembers = [...members].sort((a, b) => {
      const aValue = a[sortType as keyof Member];
      const bValue = b[sortType as keyof Member];
      return (bValue as number) - (aValue as number); // Ensures that we are dealing with numbers
    });
    setMembers(sortedMembers);
  }, [sortType, members]);

  const sortOptions: { label: string; value: SortType }[] = [
    { label: '今月のチップ回数', value: 'monthlyTipCount' },
    { label: '今月の平均チップ額', value: 'averageMonthlyTip' },
    { label: '今月のチップ額', value: 'monthlyTipAmount' },
    { label: '累計チップ額', value: 'totalTipAmount' },
  ];

  const handleSortChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: { label: string; value: SortType } | null
  ) => {
    if (newValue) {
      setSortType(newValue.value);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.companyName}>test_company</div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.memberList}>
          <div className={styles.memberListTitle}>
            メンバー一覧
            <Autocomplete
              options={sortOptions}
              getOptionLabel={(option) => option.label}
              isOptionEqualToValue={(option, value) => option.value === value.value}
              className={styles.sortSelect}
              renderInput={(params) => <TextField {...params} label="ソート" variant="outlined" />}
              onChange={handleSortChange}
              defaultValue={sortOptions[2]}
            />
          </div>
          <table className={styles.membersTable}>
            <thead>
              <tr>
                <th>名前</th>
                <th>今月のチップ回数</th>
                <th>今月の平均チップ額</th>
                <th>今月のチップ額</th>
                <th>累計チップ額</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr key={index}>
                  <td>{member.name}</td>
                  <td>{member.monthlyTipCount}</td>
                  <td>{member.averageMonthlyTip}</td>
                  <td>{member.monthlyTipAmount}</td>
                  <td>{member.totalTipAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className={styles.addMemberButton}>メンバーを追加する</button>
        </div>
      </div>
    </div>
  );
};
