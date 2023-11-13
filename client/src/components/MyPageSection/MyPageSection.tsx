import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { userAtom } from 'src/atoms/user';
import { apiClient } from 'src/utils/apiClient';
import { LeftSection } from './LeftSection.tsx/LeftSection';
import styles from './MySection.module.css';
import { RightSection } from './RightSection/RightSection';

export const MyPageSection = () => {
  const [user] = useAtom(userAtom);
  const [userProfileImage, setUserProfileImage] = useState<string>('/images/default.png');

  const getUserInfomation = async () => {
    if (!user) return;
    const userInfomaion = await apiClient.employee
      ._employeeId(user.id)
      .$post({ body: { firebaseUid: user.id } });
    if (userInfomaion !== null) {
      setUserProfileImage(userInfomaion.profileImage);
    }
    console.log(userInfomaion);
  };

  useEffect(() => {
    getUserInfomation();
  });

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <LeftSection userProfileImage={userProfileImage} />
        <RightSection />
      </div>
    </div>
  );
};
