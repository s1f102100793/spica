type StepTwoSectionProps = {
  styles: any;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  emailPreferences: boolean;
  handleNextClick: () => void;
  handlebackClick: () => void;
};

export const StepTwoSection: React.FC<StepTwoSectionProps> = ({
  styles,
  firstName,
  lastName,
  email,
  password,
  emailPreferences,
  handleNextClick,
  handlebackClick,
}) => {
  return (
    <div>
      <div className={styles.title}>登録情報確認</div>
      <form>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>氏名</label>
          <div className={styles.nameInput}>
            <p className={styles}>{lastName}</p>
            <p>{firstName}</p>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>メールアドレス</label>
          <p>{email}</p>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>パスワード</label>
          <p>{password.replace(/./g, '●')}</p>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>メール設定</label>
          <p>{emailPreferences ? '希望する' : '希望しない'}</p>
        </div>
      </form>

      <div className={styles.buttonContainer}>
        <button className={styles.changeStepButton} type="button" onClick={handlebackClick}>
          修正する
        </button>
        <button className={styles.changeStepButton} type="button" onClick={handleNextClick}>
          つぎへ
        </button>
      </div>
    </div>
  );
};
