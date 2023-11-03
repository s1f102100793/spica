import { Autocomplete, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { Header } from 'src/components/Header/Header';
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

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const tipOptions = [300, 500, 1000, 1500];

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.tipDetails}>
          <div className={styles.tipDetailsUpper}>
            <div className={styles.icon}>
              <div className={styles.iconImage} />
            </div>
            <div className={styles.tipName}>
              {company_id}
              <br />
              {user_id}
              <br />
              さんへ
            </div>
          </div>
          <div className={styles.tipDetailsLower}>
            <div className={styles.tipAmountDetail}>
              <div className={styles.tipAmount}>チップ</div>
              <div className={styles.tipAmountValue}>¥{amount}</div>
            </div>
            <button className={styles.tipButton} onClick={handleOpen}>
              チップを設定する
            </button>
            {open && (
              <Autocomplete
                open={open}
                onClose={handleClose}
                options={tipOptions}
                onInputChange={(event, newValue) => {
                  setAmount(newValue);
                  handleClose();
                }}
                renderInput={(params) => <TextField className={styles.tipTextField} {...params} />}
                className={styles.tipAmountInput}
              />
            )}
          </div>
        </div>
        <div className={styles.tipMessageArea}>
          <div className={styles.tipMessage}>{user_id}さんへのメッセージ</div>

          <textarea
            className={styles.tipMessageInput}
            value={feedback}
            onChange={handleFeedbackChange}
          />
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
