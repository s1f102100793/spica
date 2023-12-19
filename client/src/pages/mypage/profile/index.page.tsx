import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from 'react';
import { Footer } from 'src/components/Footer/Footer';
import { Header } from 'src/components/Header/Header';
import { useEmployee } from 'src/hooks/useEmployee';
import styles from './index.module.css';

const Profile = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    profileImage,
    setProfileImage,
    setFile,
    getEmployeeInformation,
    updateEmployeeInformation,
  } = useEmployee();
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const handleChangeProfileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const profileFile = e.target.files[0];
      setFile(profileFile);
      const imageURL = URL.createObjectURL(profileFile);
      setProfileImage(imageURL);
    }
  };

  useEffect(() => {
    getEmployeeInformation();
  }, [getEmployeeInformation]);

  const handleEditClick = () => {
    if (isEditing) {
      updateEmployeeInformation();
    }
    setIsEditing(!isEditing);
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <table className={styles.form}>
          <tbody>
            <tr>
              <td className={styles.formTitle} colSpan={2}>
                <div>基本情報</div>
                <EditIcon
                  style={{ color: '#0070BA', cursor: 'pointer' }}
                  onClick={handleEditClick}
                />
              </td>
            </tr>
            {isEditing ? (
              <>
                <tr className={styles.formItem}>
                  <td className={styles.formItemTitle}>氏名</td>
                  <td className={styles.formNameContent}>
                    <input
                      type="text"
                      name="firstName"
                      value={firstName}
                      onChange={handleChange}
                      className={styles.formNameInput}
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={lastName}
                      onChange={handleChange}
                      className={styles.formNameInput}
                    />
                  </td>
                </tr>
                <tr className={styles.formItem}>
                  <td className={styles.formItemTitle}>メールアドレス</td>
                  <td className={styles.formItemContent}>
                    <input
                      type="text"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      className={styles.formInput}
                    />
                  </td>
                </tr>
                <tr className={styles.formItem}>
                  <td className={styles.formItemTitle}>お客さんへ一言</td>
                  <td className={styles.formItemContent}>
                    <input type="text" className={styles.formInput} />
                  </td>
                </tr>
                <tr className={styles.formItem}>
                  <td className={styles.formItemTitle}>アイコン画像</td>
                  <td className={styles.formItemContent}>
                    <input type="file" onChange={handleChangeProfileImage} />
                    <img src={profileImage} className={styles.profileImage} alt="Profile" />
                  </td>
                </tr>
              </>
            ) : (
              <>
                <tr className={styles.formItem}>
                  <td className={styles.formItemTitle}>氏名</td>
                  <td className={styles.formNameContent}>
                    <p>{firstName}</p>
                    <p>{lastName}</p>
                  </td>
                </tr>
                <tr className={styles.formItem}>
                  <td className={styles.formItemTitle}>メールアドレス</td>
                  <td className={styles.formItemContent}>{email}</td>
                </tr>
                <tr className={styles.formItem}>
                  <td className={styles.formItemTitle}>お客さんへ一言</td>
                  <td className={styles.formItemContent}>bbbbbbbb</td>
                </tr>
                <tr className={styles.formItem}>
                  <td className={styles.formItemTitle}>アイコン画像</td>
                  <td className={styles.formItemContent}>
                    <img src={profileImage} className={styles.profileImage} alt="Profile" />
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
