import { Footer } from 'src/components/Footer/Footer';
import { Header } from 'src/components/Header/Header';
import { HeroSection } from 'src/components/Home/HeroSection/HeroSection';
import { LatestNewsSection } from 'src/components/Home/LatestNewsSection/LatestNewsSection';
import { MeritSection } from 'src/components/Home/Merit/Merit';
import { PossibleSection } from 'src/components/Home/PossibleSection/PossibleSection';

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <MeritSection />
      <PossibleSection />
      <LatestNewsSection />
      <Footer />
    </>
  );
};

export default Home;
