import { FC } from 'react';
import { GuitarList } from './components';
import { Container } from '@chakra-ui/react';

const HomePage: FC = () => {
  return (
    <div>
      <Container>
        <GuitarList />
      </Container>
    </div>
  );
};

export default HomePage;