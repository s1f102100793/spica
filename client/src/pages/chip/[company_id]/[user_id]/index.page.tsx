import { useRouter } from 'next/router';
import { useState } from 'react';
import { Header } from 'src/components/Header/Header';
import { apiClient } from 'src/utils/apiClient';
import styles from './index.module.css';

const UserChipPage = () => {
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
        <h1 className={styles.title}>{user_id}にチップをありがとうございます</h1>

        <div className={styles.inputGroup}>
          <label htmlFor="amount">チップの金額:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="金額を入力"
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="feedback">フィードバック:</label>
          <input
            type="text"
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="サービスが良かった点を教えてください"
          />
        </div>
        <button onClick={handleSendTip}>チップを送る</button>
      </div>
    </>
  );
};

export default UserChipPage;
