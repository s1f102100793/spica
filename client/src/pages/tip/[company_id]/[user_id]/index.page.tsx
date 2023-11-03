import { useRouter } from 'next/router';
import { useState } from 'react';
import { Header } from 'src/components/Header/Header';
import { apiClient } from 'src/utils/apiClient';
import styles from './index.module.css';

const UserTipPage = () => {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter(Boolean);
  const company_id = pathSegments[pathSegments.length - 2] || '';
  const user_id = pathSegments[pathSegments.length - 1] || '';

  const [amount, setAmount] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSendTip = async () => {
    const response = await apiClient.paypay.qrcode.$post({
      body: { company_id, user_id, amount: Number(amount) },
    });
    if (response) {
      router.push(response);
    }
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
        <div className={styles.tipMessageArea}>
          <div className={styles.tipMessage}>{user_id}さんへのメッセージ</div>
          <textarea className={styles.tipMessageInput} />
        </div>
        <div className={styles.tippingArea}>
          <button className={styles.tippingButton} onClick={handleSendTip}>
            チップを送る
          </button>
        </div>
      </div>
    </>
  );
};

export default UserTipPage;
