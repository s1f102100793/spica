import { useAtom } from 'jotai';
import { Header } from 'src/components/Header/Header';
import { HeroSection } from 'src/components/HeroSection/HeroSection';
import { Merit } from 'src/components/Merit/Merit';
import { userAtom } from '../atoms/user';

const Home = () => {
  const [user] = useAtom(userAtom);

  return (
    <>
      <Header />
      <HeroSection />
      <Merit />
    </>
  );
};

export default Home;
