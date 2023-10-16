import { useAtom } from 'jotai';
import { Header } from 'src/components/Header/Header';
import { HeroSection } from 'src/components/HeroSection/HeroSection';
import { userAtom } from '../atoms/user';

const Home = () => {
  const [user] = useAtom(userAtom);

  return (
    <>
      <Header />
      <HeroSection />
    </>
  );
};

export default Home;
