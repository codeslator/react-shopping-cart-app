import { FC } from 'react';
import { Features, GuitarList, Hero } from './components';
import { Container } from '@chakra-ui/react';
import { MainLayout } from '@/views/layouts';

const HomePage: FC = () => {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <Container>
        <GuitarList />
      </Container>
    </MainLayout>
  );
};

export default HomePage;