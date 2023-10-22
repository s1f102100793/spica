import { useAtom } from 'jotai';
import { Footer } from 'src/components/Footer/Footer';
import { Header } from 'src/components/Header/Header';
import { HeroSection } from 'src/components/Home/HeroSection/HeroSection';
import { LatestNewsSection } from 'src/components/Home/LatestNewsSection/LatestNewsSection';
import { MeritSection } from 'src/components/Home/Merit/Merit';
import { PossibleSection } from 'src/components/Home/PossibleSection/PossibleSection';
import { userAtom } from '../atoms/user';
import { useLoading } from './@hooks/useLoading';

const Home = () => {
  const [user] = useAtom(userAtom);
  const { loadingElm } = useLoading();

  return (
    <>
      <Header />
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
