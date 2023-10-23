import React, { useState } from 'react';

type StepThreeSectionProps = {
  email: string;
  handleNextClick: () => void;
  verificationCode: string[];
  setVerificationCode: (value: string[]) => void;
  sentCode: string | null;
  sendEmailVerification: () => void;
  styles: any;
};

export const StepThreeSection: React.FC<StepThreeSectionProps> = ({
  email,
  handleNextClick,
  verificationCode,
  setVerificationCode,
  sentCode,
  sendEmailVerification,
  styles,
}) => {
  const [errorMessage, setErrorMessage] = useState('');

  const verifyCode = () => {
    if (verificationCode.join('') === sentCode) {
      handleNextClick();
    } else {
      setErrorMessage('認証コードが正しくありません。');
    }
  };

  const handleInputChange = (index: number, value: string) => {
    if (value === '' || value.match(/^\d$/)) {
      const newCodes = [...verificationCode];
      newCodes[index] = value;
      setVerificationCode(newCodes);
    }
  };

  return (
    <div>
      <div className={styles.title}>メールアドレス認証</div>
      <form>
        <div className={styles.formGroup}>
          <p className={styles.certificationMail}>認証コードを {email} に送信しました。</p>
          <p className={styles.mail}>
            メール受信箱を確認し、下記に認証コードを入力してあなたのメールアドレスを認証してください。
          </p>

          <div className={styles.codeInputContainer}>
            {Array.from({ length: 6 }).map((_, index) => (
              <input
                key={index}
                type="text"
                value={verificationCode[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
                maxLength={1}
                className={styles.codeInput}
              />
            ))}
          </div>

          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        </div>
      </form>
      <button className={styles.createButton} onClick={verifyCode}>
        確認
      </button>

      <button className={styles.resendButton} onClick={sendEmailVerification}>
        コードを再送
      </button>
    </div>
  );
};

export default StepThreeSection;
