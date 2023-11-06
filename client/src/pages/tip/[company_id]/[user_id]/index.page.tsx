import { useRouter } from 'next/router';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { Header } from 'src/components/Header/Header';
import TipDetailSection from 'src/components/TipDetailSection/TipDetailSection';
import { apiClient } from 'src/utils/apiClient';
import styles from './index.module.css';

const UserTipPage = () => {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter(Boolean);
  const company_id = pathSegments[pathSegments.length - 2] || '';
  const user_id = pathSegments[pathSegments.length - 1] || '';

  const [amount, setAmount] = useState('500');
  const [feedback, setFeedback] = useState('');
  const handleFeedbackChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setFeedback(event.target.value);
  };

  const handleSendTip = async () => {
    const response = await apiClient.paypay.qrcode.$post({
      body: { company_id, user_id, amount: Number(amount), feedback },
    });
    if (response) {
      router.push(response);
    }
  };

  const tipOptions = [300, 500, 1000, 1500];

  const target = (
    <>
      {company_id}
      <br />
      {user_id}
      <br />
      さんへ
    </>
  );

  const message = `${user_id}さんへのメッセージ`;

  return (
    <>
      <Header />
      <TipDetailSection
        target={target}
        amount={amount}
        tipOptions={tipOptions}
        setAmount={setAmount}
        message={message}
        feedback={feedback}
        handleFeedbackChange={handleFeedbackChange}
        styles={styles}
        handleSendTip={handleSendTip}
      />
    </>
  );
};

export default UserTipPage;
