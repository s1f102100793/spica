import SaveIcon from '@mui/icons-material/Save';
import { Button } from '@mui/material';
import type { CompanyDashboardModel } from 'commonTypesWithClient/models';
import { useRouter } from 'next/router';
import Qrcode from 'qrcode';
import { useCallback, useEffect, useState } from 'react';
import { useCalculateTip } from 'src/hooks/useCaluculateTip';
import { useRouteCompanyId } from 'src/hooks/useRouteCompanyId';
import { apiClient } from 'src/utils/apiClient';
import styles from './RightQRcodeSection.module.css';
export const RightQRcodeSection = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_APP_BASE_URL;
  const router = useRouter();
  const { companyId } = useRouteCompanyId();
  const [data, setData] = useState<CompanyDashboardModel | null>(null);
  const { memberIdList } = useCalculateTip(data);
  const [qrCodeUrlPage, setQRCodeurlPage] = useState('');
  const [qrcodeUrl, setQRCodeUrl] = useState('');

  const getQRcodePageData = useCallback(async () => {
    if (companyId === undefined) return null;
    const membersData = (await apiClient.companies
      ._companyId(companyId as string)
      .$get({ query: { fields: 'dashboard' } })) as CompanyDashboardModel;
    setData(membersData);
  }, [companyId]);

  const generateQRCode = async (employeeId: string) => {
    const urlToEncode = `${BASE_URL}/tip/${companyId}/${employeeId}`;
    setQRCodeurlPage(urlToEncode);
    try {
      const response = await Qrcode.toDataURL(urlToEncode);
      setQRCodeUrl(response);
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  const generateCompanyQRCode = useCallback(async () => {
    const urlToEncode = `${BASE_URL}/tip/${companyId}`;
    setQRCodeurlPage(urlToEncode);
    try {
      const response = await Qrcode.toDataURL(urlToEncode);
      setQRCodeUrl(response);
    } catch (err) {
      console.error(err);
      return null;
    }
  }, [companyId, BASE_URL]);

  useEffect(() => {
    getQRcodePageData();
    generateCompanyQRCode();
  }, [getQRcodePageData, generateCompanyQRCode]);

  const downloadImage = (url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'QRCode.png';
    link.click();
  };

  const navigateToQRCodePage = () => {
    router.push(qrCodeUrlPage);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.companyName}>test_company</div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.qrcodeArea}>
          <div className={styles.qrcodeTitle}>QRコードを作成</div>
          <div className={styles.qrcodeContent}>
            <div className={styles.nameList}>
              <div className={styles.nameListItem} onClick={generateCompanyQRCode}>
                {data?.name}
              </div>
              {memberIdList.map((member, index) => (
                <div
                  key={index}
                  className={styles.nameListItem}
                  onClick={() => {
                    generateQRCode(member.employeeId);
                  }}
                >
                  {member.name}
                </div>
              ))}
            </div>
            <div className={styles.qrcode}>
              <img className={styles.qrcodeimg} src={qrcodeUrl} alt={`QR code for ${qrcodeUrl}`} />
              <div className={styles.buttonContainer}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<SaveIcon />}
                  onClick={() => downloadImage(qrcodeUrl)}
                  className={styles.downloadButton}
                >
                  画像を保存
                </Button>
              </div>
              <button onClick={navigateToQRCodePage}>チップページに移動</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
