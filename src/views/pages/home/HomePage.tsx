import { FC } from 'react';
import { GuitarList, Hero } from './components';
import { Container } from '@chakra-ui/react';

const HomePage: FC = () => {
  return (
    <div>
      <Hero />
      <Container>
        <GuitarList />
      </Container>
    </div>
  );
};

export default HomePage;