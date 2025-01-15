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
    <Container maxW="5xl">
      <Stack
        textAlign="center"
        align="center"
        gap={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
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
          Never miss a meeting. Never be late for one too. Keep track of your meetings and
          receive smart reminders in appropriate times. Read your smart “Daily Agenda”
          every morning.
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