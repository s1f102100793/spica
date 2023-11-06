import { Autocomplete, TextField } from '@mui/material';
import type { ChangeEvent } from 'react';
import React, { useState } from 'react';

type TipDetailSectionProps = {
  target: React.ReactNode;
  amount: string;
  tipOptions: number[];
  setAmount: (amount: string) => void;
  message: string;
  feedback: string;
  handleFeedbackChange: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  styles: any;
  handleSendTip: () => void;
};

const TipDetailSection: React.FC<TipDetailSectionProps> = ({
  target,
  amount,
  tipOptions,
  setAmount,
  message,
  feedback,
  handleFeedbackChange,
  styles,
  handleSendTip,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.tipDetails}>
        <div className={styles.tipDetailsUpper}>
          <div className={styles.icon}>
            <div className={styles.iconImage} />
          </div>
          <div className={styles.tipName}>{target}</div>
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
              getOptionLabel={(option) => option.toString()}
              className={styles.tipAmountInput}
            />
          )}
        </div>
      </div>
      <div className={styles.tipMessageArea}>
        <div className={styles.tipMessage} />
        {message}
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
  );
};

export default TipDetailSection;
