import { FC } from 'react';
import { Box, Card, Image, Text } from "@chakra-ui/react"
import { Button } from "@/components/ui/button"
import { Guitar } from '@/global/interfaces';

interface GuitarItemProps {
  guitar: Guitar;
}

const GuitarItem: FC<GuitarItemProps> = ({ guitar }) => {
  const { image, name, description, price } = guitar;
  return (
    <Card.Root flexDirection="row" overflow="hidden">
      <Image
        objectFit="contain"
        maxW="150px"
        src={image}
        alt={name}
      />
      <Box>
        <Card.Body>
          <Card.Title mb="2">{name}</Card.Title>
          <Card.Description>
            {description}
            <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
              ${price}
            </Text>
          </Card.Description>
        </Card.Body>
        <Card.Footer position="absolute" bottom={0}>
          <Button size="sm">Details</Button>
          <Button size="sm">Add to Cart</Button>
        </Card.Footer>
      </Box>
    </Card.Root>
  );
};

export default GuitarItem;