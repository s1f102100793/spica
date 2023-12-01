import type { CompanyId } from 'commonTypesWithClient/ids';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { Header } from 'src/components/Header/Header';
import TipDetailSection from 'src/components/TipDetailSection/TipDetailSection';
import { apiClient } from 'src/utils/apiClient';
import styles from './[userId]/index.module.css';

interface CompanyTipPageProps {
  data: any;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const companyIds = await apiClient.tip.company.$get();
  const paths = companyIds.map((companyId: CompanyId) => ({
    params: { companyId },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<
  CompanyTipPageProps,
  { companyId: CompanyId }
> = async ({ params }) => {
  if (!params?.companyId) {
    return { notFound: true };
  }
  const data = await apiClient.tip.company.$post({ body: { companyId: params?.companyId } });

  return {
    props: {
      data,
    },
  };
};

const CompanyTipPage: React.FC<CompanyTipPageProps> = ({ data }) => {
  const router = useRouter();
  const companyId = router.query.companyId as CompanyId;

  const [amount, setAmount] = useState('500');
  const [feedback, setFeedback] = useState('');
  const handleFeedbackChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setFeedback(event.target.value);
  };

  const handleCompanySendTip = async () => {
    const response = await apiClient.paypay.qrcode.$post({
      body: { companyId, userId: null, amount: Number(amount), feedback },
    });
    if (response) {
      router.push(response);
    }
  };

  const tipOptions = [300, 500, 1000, 1500];

  const target = `${data.name}へ`;
  const message = `${data.name}さんへのメッセージ`;

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
