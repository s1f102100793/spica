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
  data: { id: string; name: string };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const companyIds = (await apiClient.companies.$get({ query: { fields: 'id' } })) as CompanyId[];
  const paths = companyIds.map((companyId) => ({
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
  const data = await apiClient.companies
    ._companyId(params.companyId)
    .$get({ query: { fields: 'id,name' } });

  // dataの型を確認してからpropsに渡す
  if (Array.isArray(data) || typeof data === 'undefined') {
    return { notFound: true };
  }

  return {
    props: {
      data: {
        id: data.id as string,
        name: data.name as string,
      },
    },
  };
};

const CompanyTipPage: React.FC<CompanyTipPageProps> = ({ data }) => {
  const router = useRouter();
  const companyId = router.query.companyId as string;
  const companyName = data.name;

  const [amount, setAmount] = useState('500');
  const [feedback, setFeedback] = useState('');
  const handleFeedbackChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setFeedback(event.target.value);
  };

  const handleCompanySendTip = async () => {
    const response = await apiClient.tip.paypay.$post({
      body: {
        companyId,
        employeeId: null,
        companyName,
        employeeName: null,
        amount: Number(amount),
        feedback,
      },
    });
    router.push(response);
  };

  const tipOptions = [300, 500, 1000, 1500];

  const target = `${companyName}へ`;
  const message = `${companyName}さんへのメッセージ`;

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
