import type { ErrorsType } from '../FormSectioon';

type StepOneSectionProps = {
  firstName: string;
  setFirstName: (value: string) => void;
  lastName: string;
  setLastName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  passwordConfirmation: string;
  setPasswordConfirmation: (value: string) => void;
  emailPreferences: boolean;
  setEmailPreferences: (value: boolean) => void;
  errors: {
    lastName?: string;
    firstName?: string;
    email?: string;
    password?: string;
    passwordConfirmation?: string;
  };
  setErrors: (value: any) => void;
  handleNextClick: () => void;
  styles: any;
};

// eslint-disable-next-line complexity
export const StepOneSection: React.FC<StepOneSectionProps> = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  password,
  setPassword,
  passwordConfirmation,
  setPasswordConfirmation,
  emailPreferences,
  setEmailPreferences,
  errors,
  setErrors,
  handleNextClick,
  styles,
}) => {
  const handlePasswordBlur = () => {
    if (password.length < 6) {
      setErrors((prevErrors: ErrorsType) => ({
        ...prevErrors,
        password: 'パスワードは6文字以上の半角英数字で入力してください。',
      }));
      return;
    }

    const alphanumericPattern = /^[a-zA-Z0-9]+$/;
    if (!alphanumericPattern.test(password)) {
      setErrors((prevErrors: ErrorsType) => ({
        ...prevErrors,
        password: 'パスワードは6文字以上の半角英数字で入力してください。',
      }));
      return;
    }
  };

  return (
    <div>
      <div className={styles.title}>アカウント登録</div>
      <div className={styles.formcontainer}>
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
              {errors.firstName !== null && <div className={styles.error}>{errors.firstName}</div>}
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
            onBlur={handlePasswordBlur}
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

        {/* <div className={styles.mailGroup}>
          <input
            type="checkbox"
            id="emailPreferences"
            checked={emailPreferences}
            onChange={(e) => setEmailPreferences(e.target.checked)}
          />
          <label htmlFor="emailPreferences">製品の更新、お知らせ、オファーのメールを希望する</label>
        </div> */}
      </div>

      <button className={styles.createButton} type="button" onClick={handleNextClick}>
        つぎへ
      </button>

      {/* <p>
          アカウントを作成することで、<a href="/terms">利用規約</a>および
          <a href="/privacy">プライバシーポリシー</a>に同意するものとします。
        </p> */}
    </div>
  );
};
