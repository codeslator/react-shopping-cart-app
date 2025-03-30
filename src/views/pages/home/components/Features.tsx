import { FC } from 'react';
import { SimpleGrid, Heading, VStack, Container } from "@chakra-ui/react"
import { FeatureItem } from '.';
import { MdCheck } from "react-icons/md";

const about = [
  'Created with React 18 + Vite + TypeScript.',
  'Routing with Wouter.',
  'Use Chakra UI to create layout.',
  'State management with Zustand.',
  'Data fetching with Axios.',
  'Data stored in Supabase.',
  'Deployed in Vercel.',
];

const features = [
  'Select a Guitar and click in "Add to Cart" button.',
  'Open the Shopping Cart in the navbar.',
  'You can increment o decrement the item quantity.',
  'You can remove a specific item from the cart.',
  'You can remove all items from the cart.',
  'You can navigate to checkout page.',
  'Login page, register page & checkout page are just layouts.',
];


const Features: FC = () => {
  return (
    <Container maxW="6xl" mb={28}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
        <VStack align={{ base: 'flex-start' }}>
          <Heading textAlign="center">About:</Heading>
          {about.map((description: string, index: number) => (
            <FeatureItem
              key={index}
              icon={<MdCheck />}
              iconColor="teal.500"
              bgColor="teal.900"
              text={description}
            />
          ))}
        </VStack>
        <VStack align={{ base: 'flex-start' }}>
          <Heading textAlign="center">Features:</Heading>
          {features.map((description: string, index: number) => (
            <FeatureItem
              key={index}
              icon={<MdCheck />}
              iconColor="teal.500"
              bgColor="teal.900"
              text={description}
            />
          ))}
        </VStack>
      </SimpleGrid>
    </Container>
  );
};

export default Features;