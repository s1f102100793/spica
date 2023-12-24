import { Autocomplete, TextField } from '@mui/material';
import type { CompanyDashboardModel } from 'commonTypesWithClient/models';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useCalculateTip } from 'src/hooks/useCaluculateTip';
import { useRouteCompanyId } from 'src/hooks/useRouteCompanyId';
import { apiClient } from 'src/utils/apiClient';
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
  const { companyId } = useRouteCompanyId();
  const [data, setData] = useState<CompanyDashboardModel | null>(null);
  const { membersList } = useCalculateTip(data);
  const getMembersPageData = useCallback(async () => {
    if (companyId === undefined) return null;
    const membersData = (await apiClient.companies
      ._companyId(companyId as string)
      .$get({ query: { fields: 'dashboard' } })) as CompanyDashboardModel;
    setData(membersData);
  }, [companyId]);

  useEffect(() => {
    getMembersPageData();
  }, [getMembersPageData]);

  const [sortType, setSortType] = useState<SortType>('monthlyTipAmount');

  const sortedMembers = useMemo(() => {
    return [...membersList].sort((a, b) => {
      const aValue = a[sortType as keyof Member];
      const bValue = b[sortType as keyof Member];
      return (bValue as number) - (aValue as number);
    });
  }, [membersList, sortType]);

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
              {sortedMembers.map((member, index) => (
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
