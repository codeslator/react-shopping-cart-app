import { FC } from 'react';
import { SimpleGrid, Heading, Text, VStack, Container } from "@chakra-ui/react"
import { FeatureItem } from '.';
import { MdCheck } from "react-icons/md";

const Features: FC = () => {
  return (
    <Container mb={28}>
      <Heading textAlign="center">A digital Product design agency</Heading>
      <Text textAlign="center" color="gray.500" fontSize="lg" mb={5}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap="6">
        <VStack align={{ base: 'flex-start', md: 'center' }}>
          <FeatureItem
            icon={<MdCheck />}
            iconColor="yellow.500"
            bgColor="yellow.900"
            text="Business Planning"
          />
          <FeatureItem
            icon={<MdCheck />}
            iconColor="yellow.500"
            bgColor="yellow.900"
            text="Business Planning"
          />
          <FeatureItem
            icon={<MdCheck />}
            iconColor="yellow.500"
            bgColor="yellow.900"
            text="Business Planning"
          />
        </VStack>
        <VStack align={{ base: 'flex-start', md: 'center' }}>
          <FeatureItem
            icon={<MdCheck />}
            iconColor="yellow.500"
            bgColor="yellow.900"
            text="Business Planning"
          />
          <FeatureItem
            icon={<MdCheck />}
            iconColor="yellow.500"
            bgColor="yellow.900"
            text="Business Planning"
          />
          <FeatureItem
            icon={<MdCheck />}
            iconColor="yellow.500"
            bgColor="yellow.900"
            text="Business Planning"
          />
        </VStack>
        <VStack align={{ base: 'flex-start', md: 'center' }}>
          <FeatureItem
            icon={<MdCheck />}
            iconColor="yellow.500"
            bgColor="yellow.900"
            text="Business Planning"
          />
          <FeatureItem
            icon={<MdCheck />}
            iconColor="yellow.500"
            bgColor="yellow.900"
            text="Business Planning"
          />
          <FeatureItem
            icon={<MdCheck />}
            iconColor="yellow.500"
            bgColor="yellow.900"
            text="Business Planning"
          />
        </VStack>
      </SimpleGrid>
    </Container>
  );
};

export default Features;