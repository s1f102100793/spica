import SaveIcon from '@mui/icons-material/Save';
import { Button } from '@mui/material';
import Qrcode from 'qrcode';
import { useEffect, useState } from 'react';
import styles from './RightQRcodeSection.module.css';
export const RightQRcodeSection = () => {
  const [members, setMembers] = useState([
    {
      name: '山田 太郎',
      monthlyTipCount: 5,
      averageMonthlyTip: 300,
      monthlyTipAmount: 1500,
      totalTipAmount: 8000,
    },
    {
      name: '佐藤 花子',
      monthlyTipCount: 8,
      averageMonthlyTip: 250,
      monthlyTipAmount: 2000,
      totalTipAmount: 12000,
    },
    {
      name: '鈴木 一郎',
      monthlyTipCount: 3,
      averageMonthlyTip: 500,
      monthlyTipAmount: 1500,
      totalTipAmount: 4500,
    },
    {
      name: '高橋 次郎',
      monthlyTipCount: 7,
      averageMonthlyTip: 350,
      monthlyTipAmount: 2450,
      totalTipAmount: 9800,
    },
    {
      name: '田中 美咲',
      monthlyTipCount: 6,
      averageMonthlyTip: 400,
      monthlyTipAmount: 2400,
      totalTipAmount: 14400,
    },
    {
      name: '伊藤 浩',
      monthlyTipCount: 4,
      averageMonthlyTip: 450,
      monthlyTipAmount: 1800,
      totalTipAmount: 7200,
    },
    {
      name: '渡辺 京子',
      monthlyTipCount: 9,
      averageMonthlyTip: 350,
      monthlyTipAmount: 3150,
      totalTipAmount: 12600,
    },
    {
      name: '小林 大輔',
      monthlyTipCount: 2,
      averageMonthlyTip: 600,
      monthlyTipAmount: 1200,
      totalTipAmount: 2400,
    },
    {
      name: '加藤 あゆみ',
      monthlyTipCount: 10,
      averageMonthlyTip: 200,
      monthlyTipAmount: 2000,
      totalTipAmount: 20000,
    },
    {
      name: '吉田 良平',
      monthlyTipCount: 1,
      averageMonthlyTip: 1000,
      monthlyTipAmount: 1000,
      totalTipAmount: 1000,
    },
    {
      name: '渡辺 京子',
      monthlyTipCount: 9,
      averageMonthlyTip: 350,
      monthlyTipAmount: 3150,
      totalTipAmount: 12600,
    },
    {
      name: '小林 大輔',
      monthlyTipCount: 2,
      averageMonthlyTip: 600,
      monthlyTipAmount: 1200,
      totalTipAmount: 2400,
    },
    {
      name: '加藤 あゆみ',
      monthlyTipCount: 10,
      averageMonthlyTip: 200,
      monthlyTipAmount: 2000,
      totalTipAmount: 20000,
    },
    {
      name: '吉田 良平',
      monthlyTipCount: 1,
      averageMonthlyTip: 1000,
      monthlyTipAmount: 1000,
      totalTipAmount: 1000,
    },
  ]);

  const [memberNames, setMemberNames] = useState(members.map((member) => member.name));
  const [qrcodeUrl, setQRCodeUrl] = useState('');
  const company_id = 'company_id';

  const generateQRCode = async (company_id: string, user_id: string) => {
    const urlToEncode = `/tip/${company_id}/${user_id}`;
    console.log(urlToEncode);
    try {
      const response = await Qrcode.toDataURL(urlToEncode);
      setQRCodeUrl(response);
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  const generateCompanyQRCode = async () => {
    const urlToEncode = `/tip/${company_id}`;
    try {
      const response = await Qrcode.toDataURL(urlToEncode);
      setQRCodeUrl(response);
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  useEffect(() => {
    generateCompanyQRCode();
  }, []);

  const downloadImage = (url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'QRCode.png';
    link.click();
  };

  const onClick = () => {
    window.location.href = `/tip/${company_id}/`;
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
                {company_id}
              </div>
              {memberNames.map((name, index) => (
                <div
                  key={index}
                  className={styles.nameListItem}
                  onClick={() => {
                    const company_id = 'company_id';
                    const user_id = 'user_id';
                    generateQRCode(company_id, user_id);
                  }}
                >
                  {name}
                </div>
              ))}
            </div>
            <div className={styles.qrcode}>
              <img src={qrcodeUrl} alt={`QR code for ${qrcodeUrl}`} />
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
              <button onClick={onClick}>チップページに移動</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
