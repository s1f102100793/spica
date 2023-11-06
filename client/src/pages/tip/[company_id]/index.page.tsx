import { useRouter } from 'next/router';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { Header } from 'src/components/Header/Header';
import TipDetailSection from 'src/components/TipDetailSection/TipDetailSection';
import styles from './[user_id]/index.module.css';

const CompanyTipPage = () => {
  const router = useRouter();
  const { company_id } = router.query;

  const [amount, setAmount] = useState('500');
  const [feedback, setFeedback] = useState('');
  const handleFeedbackChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setFeedback(event.target.value);
  };

  const handleCompanySendTip = async () => {
    // const response = await apiClient.paypay.qrcode.$post({
    //   body: { company_id, amount: Number(amount), feedback },
    // });
    // if (response) {
    //   router.push(response);
    // }
  };

  const tipOptions = [300, 500, 1000, 1500];

  const target = `${company_id}へ`;
  const message = `${company_id}さんへのメッセージ`;

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
        handleSendTip={handleCompanySendTip}
      />
    </>
  );
};

export default CompanyTipPage;
