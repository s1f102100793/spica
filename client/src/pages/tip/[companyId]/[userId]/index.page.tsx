import type { CompanyId } from 'commonTypesWithClient/ids';
import type { EmployeeCompanyPairModel } from 'commonTypesWithClient/models';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { Header } from 'src/components/Header/Header';
import TipDetailSection from 'src/components/TipDetailSection/TipDetailSection';
import { apiClient } from 'src/utils/apiClient';
import styles from './index.module.css';

interface EmployeeTipPageProps {
  data: {
    id: string;
    name: string;
    EmployeeCompany:
      | {
          id: number;
          employeeId: string;
          employee: { name: string };
          companyId: string;
          role: {
            id: number;
            roleName: string;
          };
        }[]
      | undefined;
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const employeeCompanyList = (await apiClient.companies.$get({
    query: { fields: 'EmployeeCompany' },
  })) as EmployeeCompanyPairModel[];

  const paths: { params: { companyId: string; userId: string } }[] = [];

  employeeCompanyList.forEach((company) => {
    paths.push({
      params: { companyId: company.companyId, userId: company.employeeId },
    });
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<
  EmployeeTipPageProps,
  { companyId: CompanyId }
> = async ({ params }) => {
  if (!params?.companyId) {
    return { notFound: true };
  }
  const data = await apiClient.companies
    ._companyId(params.companyId)
    .$get({ query: { fields: 'id,name,EmployeeCompany' } });

  // dataの型を確認してからpropsに渡す
  if (Array.isArray(data) || typeof data === 'undefined') {
    return { notFound: true };
  }

  return {
    props: {
      data: {
        id: data.id as string,
        name: data.name as string,
        EmployeeCompany: data.employeeCompany,
      },
    },
  };
};

const UserTipPage: React.FC<EmployeeTipPageProps> = ({ data }) => {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter(Boolean);
  const companyId = pathSegments[pathSegments.length - 2] || '';
  const employeeId = pathSegments[pathSegments.length - 1] || '';
  const companyName = data.name;
  const employeeName = data.EmployeeCompany?.find(
    (employeeCompany) => employeeCompany.employeeId === employeeId
  )?.employee.name as string;

  const [amount, setAmount] = useState('500');
  const [feedback, setFeedback] = useState('');
  const handleFeedbackChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setFeedback(event.target.value);
  };

  const handleSendTip = async () => {
    const response = await apiClient.tip.paypay.$post({
      body: { companyId, employeeId, companyName, employeeName, amount: Number(amount), feedback },
    });
    router.push(response);
  };

  const tipOptions = [300, 500, 1000, 1500];

  const target = (
    <>
      {companyName}
      <br />
      {employeeName}
      <br />
      さんへ
    </>
  );

  const message = `${employeeName}さんへのメッセージ`;

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
