import { useAtom } from 'jotai';
import { userAtom } from 'src/atoms/user';
import { Footer } from 'src/components/Footer/Footer';
import { Header } from 'src/components/Header/Header';
import { MyPageSection } from 'src/components/MyPageSection/MyPageSection';

const MyPage = () => {
  const [user] = useAtom(userAtom);

  return (
    <>
      <Header />
      <MyPageSection />
      <Footer />
    </>
  );
};
export default MyPage;
