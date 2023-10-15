import { useAtom } from 'jotai';
import { Header } from 'src/components/Header/Header';
import { userAtom } from '../atoms/user';

const Home = () => {
  const [user] = useAtom(userAtom);

  return (
    <>
      <Header />
    </>
  );
};

export default Home;
