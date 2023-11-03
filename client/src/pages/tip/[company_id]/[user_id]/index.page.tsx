import { useRouter } from 'next/router';
import { useState } from 'react';
import { Header } from 'src/components/Header/Header';
import { apiClient } from 'src/utils/apiClient';
import styles from './index.module.css';

const UserTipPage = () => {
  const router = useRouter();
  const { user_id } = router.query;

  const [amount, setAmount] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSendTip = () => {
    apiClient.paypay.payment.$post({ body: { amount: Number(amount), feedback } });
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.tipDetails}>
          <div className={styles.tipDetailsUpper}>
            <div className={styles.icon}>
              <div className={styles.iconImage} />
            </div>
            <div className={styles.tipName}>aaa</div>
          </div>
          <div className={styles.tipDetailsLower}>
            <div className={styles.tipAmountDetail}>
              <div className={styles.tipAmount}>チップ</div>
              <div className={styles.tipAmountValue}>¥100</div>
            </div>
            <button className={styles.tipButton}>チップを設定する</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserTipPage;
