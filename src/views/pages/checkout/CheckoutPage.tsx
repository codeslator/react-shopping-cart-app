import { Box, Button, Container, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { OrderDetailsCard } from './components';

const CheckoutPage: FC = () => {
  
  const goBack = () => {
    history.back();
  }
  return (
    <VStack minH="100vh" justify="center">
      <Box position="absolute" top="4" left="4">
        <Button colorPalette="orange" variant="outline" onClick={goBack}>
          Go Back
        </Button>
      </Box>
      <Container maxW="4xl">
        <OrderDetailsCard />
      </Container>
    </VStack>
  );
};

export default CheckoutPage;