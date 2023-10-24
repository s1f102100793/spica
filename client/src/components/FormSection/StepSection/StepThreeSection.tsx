import React, { useRef, useState } from 'react';

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

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (index: number, value: string) => {
    const toHalfWidth = (str: string) => {
      if (str.match(/[０-９]/)) {
        return str.replace(/[０-９]/g, (s) => {
          return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
        });
      }
      return str;
    };

    const convertedValue = toHalfWidth(value);

    if (convertedValue === '' || convertedValue.match(/^\d$/)) {
      const newCodes = [...verificationCode];
      newCodes[index] = convertedValue;
      setVerificationCode(newCodes);
      if (convertedValue.match(/^\d$/)) {
        const nextInput = inputRefs.current[index + 1];
        if (nextInput) {
          nextInput.focus();
        }
      }
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
                ref={(el) => (inputRefs.current[index] = el)}
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
