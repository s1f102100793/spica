import { useAtom } from 'jotai';
import { Header } from 'src/components/Header/Header';
import { HeroSection } from 'src/components/Home/HeroSection/HeroSection';
import { LatestNews } from 'src/components/Home/LatestNews/LatestNews';
import { MeritSection } from 'src/components/Home/Merit/Merit';
import { PossibleSection } from 'src/components/Home/PossibleSection/PossibleSection';
import { userAtom } from '../atoms/user';

const Home = () => {
  const [user] = useAtom(userAtom);

  return (
    <>
      <Header />
      <HeroSection />
      <MeritSection />
      <PossibleSection />
      <LatestNews />
    </>
  );
};

export default Home;
