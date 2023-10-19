import { useAtom } from 'jotai';
import { Footer } from 'src/components/Footer/Footer';
import { Header } from 'src/components/Header/Header';
import { HeroSection } from 'src/components/Home/HeroSection/HeroSection';
import { LatestNewsSection } from 'src/components/Home/LatestNewsSection/LatestNewsSection';
import { MeritSection } from 'src/components/Home/Merit/Merit';
import { PossibleSection } from 'src/components/Home/PossibleSection/PossibleSection';
import { loginWithGitHub } from 'src/utils/login';
import { userAtom } from '../atoms/user';
import { useLoading } from './@hooks/useLoading';

const Home = () => {
  const [user] = useAtom(userAtom);
  const { loadingElm, addLoading, removeLoading } = useLoading();
  const login = async () => {
    addLoading();
    await loginWithGitHub();
    removeLoading();
  };

  return (
    <>
      <Header login={login} />
      <HeroSection />
      <MeritSection />
      <PossibleSection />
      <LatestNewsSection />
      <Footer />
      {loadingElm}
    </>
  );
};

export default Home;
