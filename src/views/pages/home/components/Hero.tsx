import { FC } from 'react';
import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
  HStack
} from '@chakra-ui/react'
import { environment } from '@/global';

const Hero: FC = () => {
  return (
    <Container fluid>
      <Stack
        textAlign={{ base: 'left', md: 'center' }}
        align={{ base: 'flex-start', md: 'center' }}
        gap={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
        >
          Shopping Cart App{' - '}
          <Text as="span" color="teal.400">
            React
          </Text>
        </Heading>
        <Text color="gray.500" maxW="3xl">
          <Text as="span" color="white" fontWeight="bold">ShoppingCartApp</Text> from <Text as="span" color="white" fontWeight="bold">Juan Pablo de la Torre React + TypeScript</Text> Course.
          This app was created with Vite + React 18 + TypeScript using Chakra UI to create UI and testing with Vitest + React Testing Library.
        </Text>
        <HStack>
          <Button colorPalette="teal" variant="outline" asChild>
            <a href={environment.GITHUB_REPO_URL} target="_blank">
              See GitHub Repo
            </a>
          </Button>
        </HStack>
      </Stack>
    </Container>
  );
};

export default Hero;