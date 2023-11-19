import { useAtom } from 'jotai';
import { useState } from 'react';
import { userAtom } from 'src/atoms/user';
import { LeftAdminSidebarSection } from 'src/components/AdminSection/LeftAdminSidebarSection/LeftAdminSidebarSection';
import { prefectures } from 'src/pages/@components/Prefectures';
import styles from '../index.module.css';

const Companies = () => {
  const [user] = useAtom(userAtom);
  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [initialUser, setInitialUser] = useState('');
  const [zipCodeFront, setZipCodeFront] = useState('');
  const [zipCodeBack, setZipCodeBack] = useState('');
  const [prefecture, setPrefecture] = useState('');
  const [phonePrefix, setPhonePrefix] = useState('');
  const [phoneMiddle, setPhoneMiddle] = useState('');
  const [phoneSuffix, setPhoneSuffix] = useState('');

  const handleSubmit = () => {
    const fullZipCode = `${zipCodeFront}-${zipCodeBack}`;
    const fullPhone = `${phonePrefix}-${phoneMiddle}-${phoneSuffix}`;

    console.log(companyName, address, email, fullPhone, initialUser, fullZipCode);
  };

  const handleZipCodeBlur = async () => {
    // 郵便番号から住所を取得する処理
  };

  return (
    <div className={styles.container}>
      <LeftAdminSidebarSection />
      <div className={styles.rightContainer}>
        <div className={styles.header}>
          <div className={styles.adminName}>{user?.email}</div>
        </div>
        <div className={styles.mainContent}>
          <div className={styles.contentTitle}>企業を追加</div>
          <div className={styles.content}>
            <div className={styles.form}>
              <div className={styles.formItem}>
                <div className={styles.formLabel}>企業・店舗名：</div>
                <input
                  className={styles.formInput}
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
              <div className={styles.formItem}>
                <div className={styles.formLabel}>住所：</div>
                <div className={styles.zipCodeInputContainer}>
                  <input
                    className={styles.zipCodeInput}
                    value={zipCodeFront}
                    onChange={(e) => setZipCodeFront(e.target.value)}
                    maxLength={3}
                  />
                  <span>-</span>
                  <input
                    className={styles.zipCodeInput}
                    value={zipCodeBack}
                    onChange={(e) => setZipCodeBack(e.target.value)}
                    maxLength={4}
                    onBlur={() => handleZipCodeBlur()}
                  />
                </div>
                <select
                  className={styles.formInput}
                  value={prefecture}
                  onChange={(e) => setPrefecture(e.target.value)}
                >
                  {prefectures.map((pref, index) => (
                    <option key={index} value={pref}>
                      {pref}
                    </option>
                  ))}
                </select>
                <input
                  className={styles.formInput}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className={styles.formItem}>
                <div className={styles.formLabel}>メールアドレス：</div>
                <input
                  className={styles.formInput}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.formItem}>
                <div className={styles.formLabel}>電話番号：</div>
                <div className={styles.phoneInputContainer}>
                  <input
                    className={styles.phoneInput}
                    value={phonePrefix}
                    onChange={(e) => setPhonePrefix(e.target.value)}
                    maxLength={3}
                  />
                  <span>-</span>
                  <input
                    className={styles.phoneInput}
                    value={phoneMiddle}
                    onChange={(e) => setPhoneMiddle(e.target.value)}
                    maxLength={4}
                  />
                  <span>-</span>
                  <input
                    className={styles.phoneInput}
                    value={phoneSuffix}
                    onChange={(e) => setPhoneSuffix(e.target.value)}
                    maxLength={4}
                  />
                </div>
              </div>
              <div className={styles.formItem}>
                <div className={styles.formLabel}>初期ユーザーメールアドレス：</div>
                <input
                  className={styles.formInput}
                  value={initialUser}
                  onChange={(e) => setInitialUser(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.button} onClick={handleSubmit}>
                追加
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
