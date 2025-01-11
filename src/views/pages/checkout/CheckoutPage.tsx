import { Container, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { OrderDetailsCard } from './components';

const CheckoutPage: FC = () => {
  return (
    <VStack minH="100vh" justify="center">
      <Container maxW="4xl">
        <OrderDetailsCard />
      </Container>
    </VStack>
  );
};

export default CheckoutPage;