import { useState } from 'react';
import styles from './FormSection.module.css';
import { StepOneSection } from './StepSection/StepOneSection';
import { StepTwoSection } from './StepSection/StepTwoSection';

export type ErrorsType = {
  lastName?: string;
  firstName?: string;
  email?: string;
  password?: string;
  passwordConfirmation?: string;
};

// eslint-disable-next-line complexity
export const FormSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [emailPreferences, setEmailPreferences] = useState(false);
  const [errors, setErrors] = useState<ErrorsType>({});

  // eslint-disable-next-line complexity
  const validateForm = () => {
    const formErrors: ErrorsType = {};

    const japaneseNamePattern =
      /^[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}ーa-zA-Z\s]+$/u;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!lastName || typeof lastName !== 'string' || !japaneseNamePattern.test(lastName)) {
      formErrors.lastName = '正しい苗字を入力してください。';
    }

    if (!firstName || typeof firstName !== 'string' || !japaneseNamePattern.test(firstName)) {
      formErrors.firstName = '正しい名前を入力してください。';
    }

    if (!email || typeof email !== 'string' || !emailPattern.test(email)) {
      formErrors.email = '有効なメールアドレスを入力してください。';
    }

    if (!lastName || typeof lastName !== 'string') formErrors.lastName = '苗字が未記入です';
    if (!firstName || typeof firstName !== 'string') formErrors.firstName = '名前が未記入です';
    if (!email || typeof email !== 'string') formErrors.email = 'メールアドレスが未記入です';
    if (!password || typeof password !== 'string') formErrors.password = 'パスワードが未記入です';
    if (password.length < 6) {
      formErrors.password = 'パスワードは6文字以上の半角英数字で入力してください。';
    } else {
      const alphanumericPattern = /^[a-zA-Z0-9]+$/;
      if (!alphanumericPattern.test(password)) {
        formErrors.password = 'パスワードは6文字以上の半角英数字で入力してください。';
      }
    }
    if (
      typeof password !== 'string' ||
      typeof passwordConfirmation !== 'string' ||
      password !== passwordConfirmation
    ) {
      formErrors.passwordConfirmation = 'パスワードが一致していません。';
    }

    return formErrors;
  };

  const handleNextClick = () => {
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      setCurrentStep(2);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.progressContainer}>
        <div className={`${styles.progressStep} ${currentStep === 1 ? styles.activeStep : ''}`}>
          1.仮登録
        </div>
        <div className={`${styles.progressStep} ${currentStep === 2 ? styles.activeStep : ''}`}>
          2.仮登録確認
        </div>
        <div className={`${styles.progressStep} ${currentStep === 3 ? styles.activeStep : ''}`}>
          3.メールアドレス認証
        </div>
      </div>
      <div className={styles.form}>
        {currentStep === 1 && (
          <StepOneSection
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            passwordConfirmation={passwordConfirmation}
            setPasswordConfirmation={setPasswordConfirmation}
            emailPreferences={emailPreferences}
            setEmailPreferences={setEmailPreferences}
            errors={errors}
            setErrors={setErrors}
            handleNextClick={handleNextClick}
            styles={styles}
          />
        )}
        {currentStep === 2 && (
          <StepTwoSection
            firstName={firstName}
            lastName={lastName}
            email={email}
            password={password}
            emailPreferences={emailPreferences}
            styles={styles}
          />
        )}
      </div>
    </div>
  );
};
