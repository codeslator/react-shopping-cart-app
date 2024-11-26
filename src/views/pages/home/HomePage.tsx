import { FC } from 'react';
import { Features, GuitarList, Hero } from './components';
import { Container } from '@chakra-ui/react';

const HomePage: FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Container>
        <GuitarList />
      </Container>
    </div>
  );
};

export default HomePage;