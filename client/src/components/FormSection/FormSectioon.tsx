import { useState } from 'react';
import styles from './FormSection.module.css';

type ErrorsType = {
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

    if (!lastName || typeof lastName !== 'string') formErrors.lastName = '苗字が未記入です';
    if (!firstName || typeof firstName !== 'string') formErrors.firstName = '名前が未記入です';
    if (!email || typeof email !== 'string') formErrors.email = 'メールアドレスが未記入です';
    if (!password || typeof password !== 'string') formErrors.password = 'パスワードが未記入です';
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
        <div className={styles.title}>アカウント登録</div>
        <form>
          <div className={styles.formGroup}>
            <label>氏名</label>
            <div className={styles.nameInput}>
              <div className={styles.nameArea}>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="山田"
                />
                {errors.lastName !== null && <div className={styles.error}>{errors.lastName}</div>}
              </div>
              <div className={styles.nameArea}>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="太郎"
                />
                {errors.firstName !== null && (
                  <div className={styles.error}>{errors.firstName}</div>
                )}
              </div>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>メールアドレス</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@example.com"
            />
            {errors.email !== null && <div className={styles.error}>{errors.email}</div>}
          </div>

          <div className={styles.formGroup}>
            <label>パスワード</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="6文字以上の半角英数字"
            />
            {errors.password !== null && <div className={styles.error}>{errors.password}</div>}
          </div>

          <div className={styles.formGroup}>
            <label>パスワード（確認）</label>
            <input
              type="password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              placeholder="6文字以上の半角英数字"
            />
            {errors.passwordConfirmation !== null && (
              <div className={styles.error}>{errors.passwordConfirmation}</div>
            )}
          </div>

          <div className={styles.mailGroup}>
            <input
              type="checkbox"
              id="emailPreferences"
              checked={emailPreferences}
              onChange={(e) => setEmailPreferences(e.target.checked)}
            />
            <label htmlFor="emailPreferences">
              製品の更新、お知らせ、オファーのメールを希望する
            </label>
          </div>
        </form>

        <button className={styles.createButton} type="button" onClick={handleNextClick}>
          つぎへ
        </button>

        {/* <p>
          アカウントを作成することで、<a href="/terms">利用規約</a>および
          <a href="/privacy">プライバシーポリシー</a>に同意するものとします。
        </p> */}
      </div>
    </div>
  );
};
